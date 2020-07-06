/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 *
 * Different calculations related to pressure and density
 *
 * @summary Density calculations
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 *
 * Created: 7/5/2020
 */
import { requiredVariable, round } from '../utils';

interface PressureToDensityAltRequest {
    // Pressure Altitude (ft)
    pressureAltitude: number,

    // OAT - Outside Air Temperature
    oat: number,

    // True Altitude (ft)
    trueAltidute?: number,

    // ISA - Standard  Temperature
    isa?: number,

}

/**
 * Altimeter Setting to Pressure Altitude
 * @param altSetting - Altimeter settings in in/hg (Inches of mercury)
 * @param fieldElevation
 */
const altimeterSetting = ({ altSetting, fieldElevation }: {
    altSetting: number,
    fieldElevation: number
}): number => {
    return (29.92 - altSetting) * 1000 + fieldElevation;
}


// Pressure Altitude to Density Altitude
// DA (ft) = PresAlt.(ft) + 118.8 * ( OAT(°C) - ISA(°C) )
/**
 * Pressure Altitude to Density Altitude
 * 
 * @param params 
 */
const pressureToDensity = (params: PressureToDensityAltRequest): number => {
    if (!params.isa) {
        requiredVariable(params.trueAltidute, `must provide either trueAltidute or ISA`);
        params.isa = round(15 - (1.98 * params.trueAltidute! / 1000), 2);
    }

    return params.pressureAltitude + 118.8 * (params.oat - params.isa);
}


export {
    altimeterSetting, 
    pressureToDensity
};