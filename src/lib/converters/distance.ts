/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 *
 * Convert distance units.
 * ft -> m -> ft
 * miles -> km -> miles
 * sm -> nm -> sm
 * ... 
 *
 * @summary Distance units converter
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 *
 * Created: 7/3/2020
 */

import { round } from '../../helpers';

export const metersToFeet = (value: number, precision = 2): number => {
    return round(3.281 * value, precision);
}

export const feetToMeters = (value: number, precision = 2): number => {
    return round(value / 3.281, precision);
}

export const milesToKm = (value: number, precision = 2): number => {
    return round(value * 1.609, precision);
}

export const kmToMiles = (value: number, precision = 2): number => {
    return round(value / 1.609, precision);
}

export const NauticalMileToStatueMile = (value: number, precision = 2): number => {
    return round(value * 1.151, precision);
}

export const StatueMileToNauticalMile = (value: number, precision = 2): number => {
    return round(value / 1.151, precision);
}