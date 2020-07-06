import { ConversionCategory } from "../../interfaces/Conversions";

const fahrenheitToCelsius = (value: number): number => {
    return (value - 32) * 5 / 9;
}

const fahrenheitToKelvin = (value: number): number => {
    return (value - 32) * 5 / 9 + 273.15;
}

export const temperature: ConversionCategory = {
    kelvin: { multiplier: 1 },
    kelvins: { multiplier: 1 },
    K: { multiplier: 1 },

    fahrenheit: {
        multiplier: 5 / 9,
        addition: 273.15 - 32,
        fn: {
            celsius: fahrenheitToCelsius,
            C: fahrenheitToCelsius,
            kelvin: fahrenheitToKelvin,
            kelvins: fahrenheitToKelvin,
            K: fahrenheitToKelvin,
            
        }
    },
    F: {
        multiplier: 5 / 9,
        addition: 273.15 - 32,
        fn: {
            celsius: fahrenheitToCelsius,
            C: fahrenheitToCelsius,
            kelvin: fahrenheitToKelvin,
            kelvins: fahrenheitToKelvin,
            K: fahrenheitToKelvin,
        }
    },

    celsius: { multiplier: 1, addition: 273.15 },
    C: { multiplier: 1, addition: 273.15 },

    rankine: { multiplier: 5 / 9 },
    R: { multiplier: 5 / 9 },

    delisle: { multiplier: -2 / 3, addition: 373.15 },
    De: { multiplier: -2 / 3, addition: 373.15 }
};

