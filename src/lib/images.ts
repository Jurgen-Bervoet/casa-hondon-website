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
import masterBedroom2Jpg from '../images/master-bedroom2.jpg';
import terras16bJpg from '../images/terras1-6b.jpg';
import terrein11Jpg from '../images/terrein1-1.jpg';
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
import slaapkamer22Jpg from '../images/slaapkamer2-2.jpg';
import slaapkamer32Jpg from '../images/slaapkamer3-2.jpg';
import badkamer12Jpg from '../images/badkamer1-2.jpg';
import lounge11Jpg from '../images/lounge1-1.jpg';
import lagunasDeLaMata4Jpg from '../images/lagunas-de-la-Mata4.jpg';
import alicante3Jpg from '../images/alicante3.jpg';
import elche2Jpg from '../images/elche2.jpg';
import murcia1Jpg from '../images/murcia1.jpg';
import parqueNaturalElHondo1Jpg from '../images/parque-natural-el-hondo1.jpg';
import altea2Jpg from '../images/altea2.jpg';
import villajoyosa1Jpg from '../images/Villajoyosa1.jpg';
import noveldaJpg from '../images/novelda.jpg';
import hondonDeLaNievesWebp from '../images/hondon-de-la-nieves.webp';
import aspePng from '../images/aspe.png';
import santaPola1Jpg from '../images/santa-pola1.jpg';
import tabarcoJpg from '../images/tabarco.jpg';
import santapola2Jpg from '../images/santapola2.jpg';
import playasDeGuardamar1Jpg from '../images/playas-de-guardamar1.jpg';
import drone2Jpg from '../images/drone2.jpg';
import buitentafel14Jpg from '../images/buitentafel1-4.jpg';
import terras114bPng from '../images/terras1-14b.png';
import terras115Png from '../images/terras1-15.png';
import drone5Jpg from '../images/drone5.jpg';
import drone7Png from '../images/drone7.png';

const byFilename: Record<string, ImageMetadata> = {
  'hero.jpg': heroJpg,
  'zwembad en terras.jpg': zwembadEnTerrasJpg,
  'keuken1-1.jpg': keuken11Jpg,
  'keuken1-2.jpg': keuken12Jpg,
  'badkamer1-1.jpg': badkamer11Jpg,
  'badkamer2-1.jpg': badkamer21Jpg,
  'badkamer2-2.jpg': badkamer22Jpg,
  'master-bedroom.jpg': masterBedroomJpg,
  'master-bedroom2.jpg': masterBedroom2Jpg,
  'terras1-6b.jpg': terras16bJpg,
  'terrein1-1.jpg': terrein11Jpg,
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
  'slaapkamer2-2.jpg': slaapkamer22Jpg,
  'slaapkamer3-2.jpg': slaapkamer32Jpg,
  'badkamer1-2.jpg': badkamer12Jpg,
  'lounge1-1.jpg': lounge11Jpg,
  'lagunas-de-la-Mata4.jpg': lagunasDeLaMata4Jpg,
  'alicante3.jpg': alicante3Jpg,
  'elche2.jpg': elche2Jpg,
  'murcia1.jpg': murcia1Jpg,
  'parque-natural-el-hondo1.jpg': parqueNaturalElHondo1Jpg,
  'altea2.jpg': altea2Jpg,
  'Villajoyosa1.jpg': villajoyosa1Jpg,
  'novelda.jpg': noveldaJpg,
  'hondon-de-la-nieves.webp': hondonDeLaNievesWebp,
  'aspe.png': aspePng,
  'santa-pola1.jpg': santaPola1Jpg,
  'tabarco.jpg': tabarcoJpg,
  'santapola2.jpg': santapola2Jpg,
  'playas-de-guardamar1.jpg': playasDeGuardamar1Jpg,
  'drone2.jpg': drone2Jpg,
  'buitentafel1-4.jpg': buitentafel14Jpg,
  'terras1-14b.png': terras114bPng,
  'terras1-15.png': terras115Png,
  'drone5.jpg': drone5Jpg,
  'drone7.png': drone7Png,
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
