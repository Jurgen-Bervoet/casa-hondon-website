// Central lookup for the photos actually used on the site, so pages and
// components can reference them by filename (just like the old `/foto.jpg`
// public-dir paths) while getting Astro's build-time image optimization
// (resize, webp, compression).
//
// Deliberately explicit named imports (not an eager import.meta.glob over
// src/images/) — a glob would bundle every photo in that folder into the
// build whether it's referenced or not, including the many not-yet-used
// ones. Add a line here when you wire in a new photo.

import heroJpg from '../images/hero.jpg';
import zwembadEnTerrasJpg from '../images/zwembad en terras.jpg';
import keuken11Jpg from '../images/keuken1-1.jpg';
import keuken12Jpg from '../images/keuken1-2.jpg';
import badkamer11Jpg from '../images/badkamer1-1.jpg';
import badkamer21Jpg from '../images/badkamer2-1.jpg';
import badkamer22Jpg from '../images/badkamer2-2.jpg';
import masterBedroomJpg from '../images/master-bedroom.jpg';
import slaapkamer21Jpg from '../images/slaapkamer2-1.jpg';
import slaapkamer31Jpg from '../images/slaapkamer3-1.jpg';
import woonkamer11Jpg from '../images/woonkamer1-1.jpg';
import woonkamer13Jpg from '../images/woonkamer1-3.jpg';
import img6053Jpg from '../images/IMG_6053.jpg';
import img6058Jpg from '../images/IMG_6058.jpg';
import img6059Jpg from '../images/IMG_6059.jpg';
import img6065Jpg from '../images/IMG_6065.jpg';
import terras113Jpg from '../images/terras1-13.jpg';
import woonkamer14Jpg from '../images/woonkamer1-4.jpg';
import buitentafel15Jpg from '../images/buitentafel1-5.jpg';
import terras11PortraitJpg from '../images/terras1-1 portrait.jpg';
import palmbladerenWatercolorPng from '../images/palmbladeren-watercolor.png';

const byFilename: Record<string, ImageMetadata> = {
  'hero.jpg': heroJpg,
  'zwembad en terras.jpg': zwembadEnTerrasJpg,
  'keuken1-1.jpg': keuken11Jpg,
  'keuken1-2.jpg': keuken12Jpg,
  'badkamer1-1.jpg': badkamer11Jpg,
  'badkamer2-1.jpg': badkamer21Jpg,
  'badkamer2-2.jpg': badkamer22Jpg,
  'master-bedroom.jpg': masterBedroomJpg,
  'slaapkamer2-1.jpg': slaapkamer21Jpg,
  'slaapkamer3-1.jpg': slaapkamer31Jpg,
  'woonkamer1-1.jpg': woonkamer11Jpg,
  'woonkamer1-3.jpg': woonkamer13Jpg,
  'IMG_6053.jpg': img6053Jpg,
  'IMG_6058.jpg': img6058Jpg,
  'IMG_6059.jpg': img6059Jpg,
  'IMG_6065.jpg': img6065Jpg,
  'terras1-13.jpg': terras113Jpg,
  'woonkamer1-4.jpg': woonkamer14Jpg,
  'buitentafel1-5.jpg': buitentafel15Jpg,
  'terras1-1 portrait.jpg': terras11PortraitJpg,
  'palmbladeren-watercolor.png': palmbladerenWatercolorPng,
};

export function photo(filename: string): ImageMetadata {
  const image = byFilename[filename];
  if (!image) {
    throw new Error(
      `photo(): "${filename}" is not registered in src/lib/images.ts. Add an import + map entry for it.`
    );
  }
  return image;
}
