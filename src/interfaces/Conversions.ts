
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