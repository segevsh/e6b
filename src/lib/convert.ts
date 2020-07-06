/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 *
 * @summary Conversion methods
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 *
 * Created: 7/5/2020
 */
import * as converters from './converters';
import { requiredVariable } from '../utils';
import { ConversionUnit, ConversionCategory } from '../interfaces/Conversions';

// const families = Object.values(converters);

// interface for a function that convert the value(type T) into type Q
interface ConverterBody<T, Q> {
    to(value: T): Q;
}



const categories = Object.values(converters);


const getConverter = (units: ConversionCategory, key: Readonly<string>): ConversionUnit => {
    const found = units[key];
    requiredVariable(found, `${key} was not found`);

    return {
        addition: 0,
        ...found
    };
}




/**
 * 
 * @param value 
 * 
 * @example convert(5).from("mile").to("NM")
 * 
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const convert = (value: number | bigint) => {
    return {
        from: (fromUnit: string) => {

            // find the conversion category
            const cat = categories.find(category => (category as ConversionCategory)[fromUnit]) as ConversionCategory;


            requiredVariable(cat, `Conversion category was not found: ${fromUnit}`);

            const convertFrom = getConverter(cat, fromUnit);


            return {
                to: (toUnit: string) => {

                    if (toUnit === fromUnit) {
                        return value;
                    }

                    if (convertFrom.fn && convertFrom.fn[toUnit]) {
                        return convertFrom.fn[toUnit](Number(value));
                    }

                    const convertTo = getConverter(cat, toUnit);
                    const multiplier = convertFrom.multiplier / convertTo.multiplier;
                    const diff = (convertFrom.addition || 0) - (convertTo.addition || 0);

                    if (typeof value === 'bigint') {
                        return value * BigInt(multiplier) + BigInt(diff);
                    }

                    return value * multiplier + diff;
                }
            }
        }
    }
}