# Sitemap — Casa Lana

Vakantiehuis in Hondón de las Nieves (Alicante). 3 slaapkamers, 2 badkamers, plaats voor
6 personen, privézwembad (3 x 11 m), 10.000 m² volledig omheind terrein. Site in
NL (hoofdtaal) / ES / EN / FR.

> "Casa Lana" is een werknaam (zie brainstorm-document), momenteel overal doorgevoerd op
> verzoek van de eigenaars. Kan later nog wijzigen — zie memory-bestand van dit project.

## Paginastructuur

Elke pagina bestaat in 4 taalversies. NL is de standaardtaal zonder prefix.

| Pagina | NL | ES | EN | FR |
|---|---|---|---|---|
| Home | `/` | `/es/` | `/en/` | `/fr/` |
| Het Huis | `/het-huis/` | `/es/la-casa/` | `/en/the-house/` | `/fr/la-maison/` |
| Omgeving | `/de-omgeving/` | `/es/la-zona/` | `/en/the-area/` | `/fr/la-region/` |
| Ons Verhaal | `/ons-verhaal/` | `/es/nuestra-historia/` | `/en/our-story/` | `/fr/notre-histoire/` |
| Prijzen & Beschikbaarheid | `/beschikbaarheid/` | `/es/disponibilidad/` | `/en/availability/` | `/fr/disponibilite/` |
| FAQ | `/faq/` | `/es/faq/` | `/en/faq/` | `/fr/faq/` |
| Contact | `/contact/` | `/es/contacto/` | `/en/contact/` | `/fr/contact/` |

1. **Home** — hero (`hero.jpg`), welkomstintro met kernfeiten (6 pers., 3 slaapkamers,
   2 badkamers, zwembad 3x11m, 10.000 m², afstanden dorp/vliegveld/kust), 4 USP-tegels,
   link naar Ons Verhaal, teaser naar Omgeving, CTA → Prijzen & Beschikbaarheid
2. **Het Huis** — feitenlijst + 6 uitgeschreven subsecties (Slapen, Twee badkamers, Keuken,
   Comfort, Buiten leven, Alle ruimte voor jezelf), "zelf mee te nemen", fotogalerij (9 foto's)
3. **Omgeving** — 13 bestemmingen als kaarten (naam, afstand, beschrijving, "zeker doen"),
   samenvattingstabel "in één oogopslag", teaser voor de exclusieve gastengids na boeking
4. **Ons Verhaal** — het volledige verhaal van het gezin (Evelien, Jurgen, Lukas, Helena),
   waarom en hoe ze Casa Lana kochten
5. **Prijzen & Beschikbaarheid** — kalender + aanvraagformulier, aankomst/vertrek
   (16:00–21:00 incheck, +€25 na 21u, keyholder), betaling (50% aanbetaling, restant 1 maand
   voor aankomst, borg €800, schoonmaak €150), energie (nog te bevestigen hoe afgerekend),
   annulering (8w=0%, 6w=25%, 2w=100%, 6–2w nog te bepalen)
6. **FAQ** — 22 vraag/antwoord-items, met FAQPage schema.org structured data
   (`FAQList.astro`)
7. **Contact** — contactgegevens + contactformulier

## Herbruikbare componenten (nieuw t.o.v. eerdere versie)

- `FAQList.astro` — Q&A-lijst + automatische FAQPage JSON-LD
- `DestinationList.astro` — kaarten voor de Omgeving-bestemmingen
- `SummaryTable.astro` — de "in één oogopslag"-tabel

## Vaste elementen (alle pagina's)

- **Header**: logo/naam "Casa Lana", navigatie (7 items), taalwissel (NL/ES/EN/FR)
- **Footer**: huisnaam + tagline, navigatie herhaald, copyright

## Nog te beslissen / later aan te vullen

- Definitieve huisnaam (Casa Lana is een werknaam)
- E-mailadres en telefoonnummer
- Minimumverblijfsduur
- Hoe energieverbruik precies gemeten/afgerekend wordt
- Annuleringsregeling tussen 6 en 2 weken voor aanvang (expliciet nog open in het
  brainstorm-document zelf)
- Exacte ligging/adres en Google-pin: **bewust niet openbaar publiceren** — dit gaat pas
  na boeking naar gasten (instructie uit het brainstorm-document)
- De persoonlijke gastengids (restaurants, parkings, tips) is exclusief voor geboekte
  gasten en hoort dus niet publiek op de site
- Meeste foto's staan nog als placeholder; enkel `hero.jpg`, `zwembad en terras.jpg` en
  `woonruimte.jpg` zijn echt
- Beschrijvende bestandsnamen/alt-teksten voor foto's zodra de echte foto's er zijn
  (bv. `privezwembad-hondon-de-las-nieves.jpg`), per instructie uit het brainstorm-document
