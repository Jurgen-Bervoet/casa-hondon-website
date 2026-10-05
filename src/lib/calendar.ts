// Fetches and parses the booked-dates feed for the availability calendar.
//
// Point GOOGLE_CALENDAR_ICAL_URL (set as an env var in Netlify, see .env.example)
// at the "Secret address in iCal format" of a Google Calendar where bookings are
// marked as all-day events. We fetch it at build time and turn it into a plain
// list of booked date ranges — no npm ical library needed, Google's export only
// uses a small, predictable subset of the iCal spec for all-day events.
//
// If the env var isn't set (or the fetch/parse fails), we fail open with an
// empty list rather than breaking the build — the calendar just shows
// everything as available until the feed is configured.

export interface DateRange {
  /** Inclusive, 'YYYY-MM-DD' */
  start: string;
  /** Exclusive (iCal DTEND convention for all-day events), 'YYYY-MM-DD' */
  end: string;
}

function parseIcsDate(value: string): string | null {
  // Expects YYYYMMDD (all-day event date value).
  const match = value.match(/^(\d{4})(\d{2})(\d{2})/);
  if (!match) return null;
  const [, y, m, d] = match;
  return `${y}-${m}-${d}`;
}

export function parseIcsBusyRanges(ics: string): DateRange[] {
  const ranges: DateRange[] = [];
  // Unfold wrapped lines (iCal continuation lines start with a space).
  const unfolded = ics.replace(/\r\n[ \t]/g, '').replace(/\n[ \t]/g, '');
  const events = unfolded.split('BEGIN:VEVENT').slice(1);

  for (const block of events) {
    const startMatch = block.match(/DTSTART[^:]*:(\d{8})/);
    const endMatch = block.match(/DTEND[^:]*:(\d{8})/);
    if (!startMatch || !endMatch) continue;
    const start = parseIcsDate(startMatch[1]);
    const end = parseIcsDate(endMatch[1]);
    if (start && end) ranges.push({ start, end });
  }

  return ranges;
}

export async function fetchBusyRanges(): Promise<DateRange[]> {
  const url = import.meta.env.GOOGLE_CALENDAR_ICAL_URL;
  if (!url) return [];

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[calendar] Failed to fetch iCal feed: ${res.status} ${res.statusText}`);
      return [];
    }
    const text = await res.text();
    return parseIcsBusyRanges(text);
  } catch (err) {
    console.warn('[calendar] Failed to fetch/parse iCal feed:', err);
    return [];
  }
}

export function isDateBusy(iso: string, ranges: DateRange[]): boolean {
  return ranges.some((r) => iso >= r.start && iso < r.end);
}

export interface MonthCell {
  day: number;
  iso: string;
  booked: boolean;
}

export interface MonthGrid {
  year: number;
  month: number; // 0-11
  leadingEmpty: number;
  cells: MonthCell[];
}

/**
 * Builds a Monday-first calendar grid for the given month.
 */
export function buildMonthGrid(year: number, month: number, ranges: DateRange[]): MonthGrid {
  const firstDay = new Date(Date.UTC(year, month, 1));
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  // getUTCDay(): 0 = Sunday .. 6 = Saturday. We want Monday-first columns.
  const leadingEmpty = (firstDay.getUTCDay() + 6) % 7;

  const cells: MonthCell[] = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return { day, iso, booked: isDateBusy(iso, ranges) };
  });

  return { year, month, leadingEmpty, cells };
}

/** Returns the current month plus `count - 1` following months. */
export function nextMonths(count: number, ranges: DateRange[], from = new Date()): MonthGrid[] {
  const grids: MonthGrid[] = [];
  const year = from.getUTCFullYear();
  const month = from.getUTCMonth();
  for (let i = 0; i < count; i++) {
    const d = new Date(Date.UTC(year, month + i, 1));
    grids.push(buildMonthGrid(d.getUTCFullYear(), d.getUTCMonth(), ranges));
  }
  return grids;
}
