/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 *
 * @summary Conversion interfaces
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 *
 * Created: 7/5/2020
 */
export interface ConversionUnit {
    multiplier: number;
    addition?: number;
    fn?: undefined | null | {
        [key: string]: (value: number) => typeof value
    }
}

export interface ConversionCategory {
    [string: string]: ConversionUnit;
}