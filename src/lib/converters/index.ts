import { ConversionUnit } from '../../interfaces/Conversions';

export { length } from './length';
export { mass } from './mass';
export { temperature } from './temperature';
export { time } from './time';
export { pressure } from './pressure';


export type GetAliases<T extends Record<string, ConversionUnit>> = keyof T;


// export type Length = GetAliases<typeof length>;

// export type AllUnits = Data | Length | Mass | Pressure | Temperature | Time;




// interface Converter<Q> {
//     from(fromUnit: string): {
//         to: (toUnit: string) : Q;
//     }
// }
