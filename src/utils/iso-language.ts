import { capitalizeFirstLetter } from "./helper/string";
import { POKEMON_NAME } from "./pokemon-name";

export function hasFrBrowser(isolangFromBrowser: string) {
  if (isolangFromBrowser) {
    return FR_ISO_LANGUAGE.some((isolang) => isolang === isolangFromBrowser);
  }
}
export function hasEnBrowser(isolangFromBrowser: string) {
  if (isolangFromBrowser) {
    return EN_ISO_LANGUAGE.some((isolang) => isolang === isolangFromBrowser);
  }
}

export function detectLanguage(name: string) {
  if (name) {
    const isFrLang = POKEMON_NAME.filter((obj: any) =>
      Object.keys(obj).some((key) => obj[key].includes(capitalizeFirstLetter(name)))
    ).map((x) => x.fr === capitalizeFirstLetter(name));

    console.log(isFrLang)
    if (isFrLang[0]) {
      return { fr: FR_ISO_LANGUAGE };
    } else {
      return { en: EN_ISO_LANGUAGE };
    }
  }
}

export const FR_ISO_LANGUAGE = [
  "fr",
  "fr-FR",
  "fr-BE",
  "fr-CA",
  "fr-CH",
  "fr-LU",
];

export const EN_ISO_LANGUAGE = [
  "en",
  "en-US",
  "en-EG",
  "en-AU",
  "en-GB",
  "en-CA",
  "en-NZ",
  "en-IE",
  "en-ZA",
  "en-JM",
  "en-BZ",
  "en-TT",
];
