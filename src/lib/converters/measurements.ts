/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 *
 * Convert measurement units.
 * (in/hg) Inch of mercury -> HectoPascal (hpa)
 * ... 
 *
 * @summary Measurements units converter
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 *
 * Created: 7/3/2020
 */

import { round } from '../../helpers';

/**
 * (in/hg) Inch of mercury to HectoPascal (hpa)
 * 
 * @param value In/Hg - Inch of mercury
 * @param precision 
 */
export const InHgToHpa = (value: number, precision = 2): number => {
    return round(33.864 * value, precision);
}

/**
 * HectoPascal (hpa) to Inch of mercury (in/hg) 
 * 
 * @param value HectoPascal units
 * @param precision 
 */
export const HpaToInHg = (value: number, precision = 2): number => {
    return round(value / 33.864, precision);
}
