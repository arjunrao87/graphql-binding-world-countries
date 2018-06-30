const typeDefs =
`
type Query{
    countries(input: CountryInput): [Country]
}

type Country{
    name: String
    nativeName: String
    demonym: String
    flag: String
    capital: String
    alpha2Code: String
    alpha3Code: String
    callingCodes: [String]
    cioc: String
    numericCode: String
    population: Int
    latitude: Float
    longitude: Float
    translations: Translations
    topLevelDomain:[String]
    altSpellings: [String]
    region: String
    subregion: String
    area: Float
    gini: Float
    timezones: [String]
    borders: [String]
    currencies: [Currency]
    languages: [Language]
    regionalBlocs: [RegionalBlock]
}

type RegionalBlock{
    acronym: String
    name: String
    otherAcronyms: [String]
    otherNames: [String]
}

type Translations{
    de: String
    es: String
    fr: String
    ja: String
    it: String
    br: String
    pt: String
}

type Language{
    iso639_1: String
    iso639_2: String
    name: String
    nativeName: String
}

type Currency{
    code: String
    name: String
    symbol: String
}

input CountryInput{
    allCountries: Boolean

    # Search by country name. It can be the native name or partial name
    name: String

    # Search by country full name
    fullName: String

    # Search by list of ISO 3166-1 2-letter or 3-letter country codes
    isoCodes: [String]

    # Search by ISO 4217 currency code
    currency: String

    # Search by ISO 639-1 language code.
    language: String

    # Search by capital city
    capital: String

    # Search by calling code
    callingCode: String

    # Search by region: Africa, Americas, Asia, Europe, Oceania
    region: String

    # Search by regional bloc ( see enum )
    regionalBlock: RegionalBlockEnum
}

enum RegionalBlockEnum{
    # European Union
    EU
    # European Free Trade Association
    EFTA
    # Caribbean Community
    CARICOM
    # Pacific Alliance
    PA
    # African Union
    AU
    # Union of South American Nations
    USAN
    # Eurasian Economic Union
    EEU
    # Arab League
    AL
    # Association of Southeast Asian Nations
    ASEAN
    # Central American Integration System
    CAIS
    # Central European Free Trade Agreement
    CEFTA
    # North American Free Trade Agreement
    NAFTA
    # South Asian Association for Regional Cooperation
    SAARC
}`;

module.exports = {
  typeDefs,
};
