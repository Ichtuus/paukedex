import { capitalizeFirstLetter } from './helper/string'
import { POKEMON_NAME } from './pokemon-name'

export class IsoLanguage {
    private FR_ISO_LANGUAGE = [
        'fr',
        'fr-FR',
        'fr-BE',
        'fr-CA',
        'fr-CH',
        'fr-LU',
    ]

    private EN_ISO_LANGUAGE = [
        'en',
        'en-US',
        'en-EG',
        'en-AU',
        'en-GB',
        'en-CA',
        'en-NZ',
        'en-IE',
        'en-ZA',
        'en-JM',
        'en-BZ',
        'en-TT',
    ]

    hasFrBrowser(isolangFromBrowser: string) {
        if (isolangFromBrowser) {
            return this.FR_ISO_LANGUAGE.some(
                (isolang) => isolang === isolangFromBrowser
            )
        }
    }

    hasEnBrowser(isolangFromBrowser: string) {
        if (isolangFromBrowser) {
            return this.EN_ISO_LANGUAGE.some(
                (isolang) => isolang === isolangFromBrowser
            )
        }
    }

    detectLanguage(name: string) {
        if (name) {
            const isFrLang = POKEMON_NAME.filter((obj: any) =>
                Object.keys(obj).some((key) =>
                    obj[key].includes(capitalizeFirstLetter(name))
                )
            ).map((x) => x.fr === capitalizeFirstLetter(name))

            if (isFrLang[0]) {
                return { fr: this.FR_ISO_LANGUAGE }
            } else {
                return { en: this.EN_ISO_LANGUAGE }
            }
        }
    }
}
