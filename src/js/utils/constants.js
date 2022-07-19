import {createBrowserHistory} from "history";
const HISTORY = createBrowserHistory();
const LANGUAGES = ["en", "fr", "id", "pt", "it", "de", "ja", "zh", "ko", "ru", "hi", "es"];

/*
 * The page routes system is working with regex, tabs system (weird) isn't great but it will change
 */
const PAGE_ROUTES = [
    {
        page_regex: /\/*/,
        page_name: "unknown",
        tabs: ""
    },
    {
        page_regex: /\/$/,
        page_name: "home",
        tabs: ""
    },
    {
        page_regex: /\/(settings)$/,
        page_name: "settings",
        tabs: ""
    },
    {
        page_regex: /\/(pixel)$/,
        page_name: "pixel",
        tabs: ""
    }
];

// We use this to know which currency to select when we have the country code known
const CURRENCY_COUNTRIES = {
    ARS: ["AR"],
    AUD: ["AU", "CC", "CX", "HM", "KI", "NF", "NR", "TV"],
    BDT: ["BD"],
    BRL: ["BR"],
    CAD: ["CA"],
    CHF: ["CH", "LI"],
    CLP: ["CL"],
    CNY: ["CN"],
    COP: ["CO"],
    CZK: ["CZ"],
    DKK: ["DK", "FO", "GL"],
    EUR: ["AD", "AT", "AX", "BE", "BL", "CY", "DE", "EE", "ES", "FI", "FR", "GF", "GP", "GR", "IE", "IT", "LU", "MC", "ME", "MF", "MQ", "MT", "NL", "PM", "PT", "RE", "SI", "SK", "SM", "TF", "VA", "YT"],
    GBP: ["GB", "GG", "GS", "IM", "JE"],
    HKD: ["HK"],
    HUF: ["HU"],
    IDR: ["ID"],
    ILS: ["IL", "PS"],
    INR: ["IN"],
    JPY: ["JP"],
    KRW: ["KR"],
    LKR: ["LK"],
    MXN: ["MX"],
    NOK: ["BV", "NO", "SJ"],
    NZD: ["CK", "NU", "NZ", "PN", "TK"],
    PLN: ["PL"],
    RON: ["RO"],
    RUB: ["RU"],
    SAR: ["SA"],
    SEK: ["SE"],
    THB: ["TH"],
    TRY: ["TR"],
    TWD: ["TW"],
    USD: ["AS", "BQ", "EC", "FM", "GU", "IO", "MH", "MP", "PR", "PW", "TC", "TL", "UM", "US", "VG", "VI"],
    ZAR: ["ZA"],
};

const FIRST_WEEK_DAY_BY_COUNTRY = {
    "001": "mon",
    "AD": "mon",
    "AE": "sat",
    "AF": "sat",
    "AG": "sun",
    "AI": "mon",
    "AL": "mon",
    "AM": "mon",
    "AN": "mon",
    "AR": "mon",
    "AS": "sun",
    "AT": "mon",
    "AU": "sun",
    "AX": "mon",
    "AZ": "mon",
    "BA": "mon",
    "BD": "sun",
    "BE": "mon",
    "BG": "mon",
    "BH": "sat",
    "BM": "mon",
    "BN": "mon",
    "BR": "sun",
    "BS": "sun",
    "BT": "sun",
    "BW": "sun",
    "BY": "mon",
    "BZ": "sun",
    "CA": "sun",
    "CH": "mon",
    "CL": "mon",
    "CM": "mon",
    "CN": "sun",
    "CO": "sun",
    "CR": "mon",
    "CY": "mon",
    "CZ": "mon",
    "DE": "mon",
    "DJ": "sat",
    "DK": "mon",
    "DM": "sun",
    "DO": "sun",
    "DZ": "sat",
    "EC": "mon",
    "EE": "mon",
    "EG": "sat",
    "ES": "mon",
    "ET": "sun",
    "FI": "mon",
    "FJ": "mon",
    "FO": "mon",
    "FR": "mon",
    "GB": "mon",
    "GB-alt-variant": "sun",
    "GE": "mon",
    "GF": "mon",
    "GP": "mon",
    "GR": "mon",
    "GT": "sun",
    "GU": "sun",
    "HK": "sun",
    "HN": "sun",
    "HR": "mon",
    "HU": "mon",
    "ID": "sun",
    "IE": "mon",
    "IL": "sun",
    "IN": "sun",
    "IQ": "sat",
    "IR": "sat",
    "IS": "mon",
    "IT": "mon",
    "JM": "sun",
    "JO": "sat",
    "JP": "sun",
    "KE": "sun",
    "KG": "mon",
    "KH": "sun",
    "KR": "sun",
    "KW": "sat",
    "KZ": "mon",
    "LA": "sun",
    "LB": "mon",
    "LI": "mon",
    "LK": "mon",
    "LT": "mon",
    "LU": "mon",
    "LV": "mon",
    "LY": "sat",
    "MC": "mon",
    "MD": "mon",
    "ME": "mon",
    "MH": "sun",
    "MK": "mon",
    "MM": "sun",
    "MN": "mon",
    "MO": "sun",
    "MQ": "mon",
    "MT": "sun",
    "MV": "fri",
    "MX": "sun",
    "MY": "mon",
    "MZ": "sun",
    "NI": "sun",
    "NL": "mon",
    "NO": "mon",
    "NP": "sun",
    "NZ": "mon",
    "OM": "sat",
    "PA": "sun",
    "PE": "sun",
    "PH": "sun",
    "PK": "sun",
    "PL": "mon",
    "PR": "sun",
    "PT": "sun",
    "PY": "sun",
    "QA": "sat",
    "RE": "mon",
    "RO": "mon",
    "RS": "mon",
    "RU": "mon",
    "SA": "sun",
    "SD": "sat",
    "SE": "mon",
    "SG": "sun",
    "SI": "mon",
    "SK": "mon",
    "SM": "mon",
    "SV": "sun",
    "SY": "sat",
    "TH": "sun",
    "TJ": "mon",
    "TM": "mon",
    "TR": "mon",
    "TT": "sun",
    "TW": "sun",
    "UA": "mon",
    "UM": "sun",
    "US": "sun",
    "UY": "mon",
    "UZ": "mon",
    "VA": "mon",
    "VE": "sun",
    "VI": "sun",
    "VN": "mon",
    "WS": "sun",
    "XK": "mon",
    "YE": "sun",
    "ZA": "sun",
    "ZW": "sun"
};

const UTC_OFFSET_PER_COUNTRIES = {
    "AF": 4.3,
    "AL": 2,
    "DZ": 2,
    "AS": -11,
    "AO": 1,
    "AI": -4,
    "AG": -4,
    "AR": -3,
    "AM": 4,
    "AW": -4,
    "AU": 10,
    "AT": 1,
    "AZ": 4,
    "BS": -5,
    "BH": 3,
    "BD": 6,
    "BB": -4,
    "BY": 3,
    "BE": 1,
    "BZ": -6,
    "BJ": 1,
    "BM": -4,
    "BT": 6,
    "BO": -4,
    "BA": 1,
    "BW": 2,
    "BR": -5,
    "BG": 2,
    "BF": 0,
    "BI": 2,
    "KH": 7,
    "CM": 1,
    "CA": -6,
    "CV": -1,
    "KY": -5,
    "CF": 1,
    "TD": 1,
    "CL": -3,
    "CN": 8,
    "CX": 7,
    "CC": 6.3,
    "CO": -5,
    "KM": 3,
    "CD": 1,
    "CK": -10,
    "CR": -6,
    "CI": 0,
    "HR": 1,
    "CY": 2,
    "CZ": 1,
    "DK": 1,
    "DJ": 3,
    "DM": -4,
    "DO": -4,
    "EC": -5,
    "EG": 2,
    "SV": -6,
    "GQ": 1,
    "ER": 3,
    "EE": 2,
    "ET": 3,
    "FK": -3,
    "FO": 0,
    "FJ": 12,
    "FI": 2,
    "FR": 1,
    "GF": -3,
    "PF": -10,
    "GA": 1,
    "GM": 0,
    "GE": 4,
    "DE": 1,
    "GH": 0,
    "GI": 1,
    "GR": 2,
    "GL": -3,
    "GD": -4,
    "GP": -4,
    "GU": 10,
    "GT": -6,
    "GG": 0,
    "GN": 0,
    "GW": 0,
    "GY": -4,
    "HT": -5,
    "HM": 5,
    "VA": 1,
    "HN": -6,
    "HK": 8,
    "HU": 1,
    "IS": 0,
    "IN": 5.3,
    "ID": 7,
    "IR": 3.3,
    "IQ": 3,
    "IE": 0,
    "IM": 0,
    "IL": 2,
    "IT": 1,
    "JM": -5,
    "JP": 9,
    "JE": 0,
    "JO": 2,
    "KZ": 5,
    "KE": 3,
    "KI": 12,
    "KP": 8.3,
    "KR": 9,
    "KW": 3,
    "KG": 6,
    "LA": 7,
    "LV": 2,
    "LB": 2,
    "LS": 2,
    "LR": 0,
    "LI": 1,
    "LT": 2,
    "LU": 1,
    "MK": 1,
    "MG": 3,
    "MW": 2,
    "MY": 8,
    "MV": 5,
    "ML": 0,
    "MT": 0,
    "MH": 12,
    "MQ": -4,
    "MR": 0,
    "MU": 4,
    "YT": 3,
    "MX": -6,
    "FM": 10,
    "MD": 2,
    "MC": 1,
    "MN": 8,
    "MS": -4,
    "MA": 0,
    "MZ": 2,
    "MM": 6.3,
    "NA": 1,
    "NR": 12,
    "NP": 5.45,
    "NL": 1,
    "AN": -4,
    "NZ": 12,
    "NI": -6,
    "NE": 1,
    "NG": 1,
    "NU": -11,
    "NF": 11.3,
    "MP": 10,
    "NO": 1,
    "OM": 4,
    "PK": 5,
    "PW": 9,
    "PS": 2,
    "PA": -5,
    "PG": 10,
    "PY": -4,
    "PE": -5,
    "PH": 8,
    "PL": 1,
    "PT": 0,
    "PR": -4,
    "QA": 3,
    "RE": 4,
    "RU": 0,
    "RW": 2,
    "SH": 0,
    "KN": -4,
    "LC": -4,
    "PM": -3,
    "VC": -4,
    "WS": 13,
    "SM": 1,
    "ST": 0,
    "SA": 3,
    "SN": 0,
    "SC": 4,
    "SL": 0,
    "SG": 8,
    "SK": 1,
    "SI": 1,
    "SB": 11,
    "SO": 3,
    "ZA": 2,
    "GS": -2,
    "ES": 1,
    "LK": 5.3,
    "SD": 3,
    "SR": -3,
    "SJ": 1,
    "SZ": 2,
    "SE": 1,
    "CH": 1,
    "SY": 2,
    "TW": 8,
    "TJ": 5,
    "TZ": 3,
    "TH": 7,
    "TG": 0,
    "TK": 13,
    "TO": 13,
    "TT": 13,
    "TN": 1,
    "TR": 2,
    "TM": 5,
    "TV": 12,
    "UG": 3,
    "UA": 2,
    "AE": 4,
    "GB": 0,
    "US": -6,
    "UY": -3,
    "UZ": 5,
    "VU": 11,
    "VE": -4.3,
    "VN": 7,
    "VG": -4,
    "VI": -4,
    "WF": 12,
    "EH": 1,
    "YE": 3,
    "ZM": 1,
    "ZW": 2,
    "AX": 2,
    "AD": 1,
    "AQ": 13,
    "BV": 1,
    "IO": 6,
    "BN": 8,
    "CG": 1,
    "CU": -5,
    "TF": 5,
    "XK": 1,
    "LY": 2,
    "MO": 8,
    "NC": 11,
    "PN": -8,
    "RO": 2,
    "RS": 1,
    "ME": 1,
    "TL": 9,
    "TC": -5,
    "UM": -11
}

module.exports = {
    LANGUAGES: LANGUAGES,
    HISTORY: HISTORY,
    PAGE_ROUTES: PAGE_ROUTES,
    CURRENCY_COUNTRIES: CURRENCY_COUNTRIES,
    FIRST_WEEK_DAY_BY_COUNTRY: FIRST_WEEK_DAY_BY_COUNTRY,
    UTC_OFFSET_PER_COUNTRIES: UTC_OFFSET_PER_COUNTRIES,
};
