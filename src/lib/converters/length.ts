/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 *
 * @summary Convert lenght units 
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 *
 * Created: 7/5/2020
 */
import { ConversionCategory } from "../../interfaces/Conversions";

export const length: ConversionCategory = {
    // baseline
    meter: { multiplier: 1 },
    meters: { multiplier: 1 },
    m: { multiplier: 1 },


    centimeter: { multiplier: 1e-2 },
    centimeters: { multiplier: 1e-2 },
    cm: { multiplier: 1e-2 },

    millimeter: { multiplier: 1e-3 },
    millimeters: { multiplier: 1e-3 },
    mm: { multiplier: 1e-3 },

    kilometer: { multiplier: 1e3 },
    kilometers: { multiplier: 1e3 },
    km: { multiplier: 1e3 },



    mile: { multiplier: 1609.344 },
    miles: { multiplier: 1609.344 },
    mi: { multiplier: 1609.344 },

    'nautical mile': { multiplier: 1852 },
    'nautical miles': { multiplier: 1852 },
    M: { multiplier: 1852 },
    NM: { multiplier: 1852 },
    nmi: { multiplier: 1852 }

};