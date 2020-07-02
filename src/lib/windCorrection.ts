/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 * 
 * Wind correction using E6B formula. 
 * @see https://wikimedia.org/api/rest_v1/media/math/render/svg/25600bf2be1d5376a75675d6718651056262dbcd
 * 
 * @summary Calculate Wind Correction
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 * 
 * Created: 7/1/2020
 */
import {
    fromRadian,
    toRadian
 } from '../helpers';

export interface WindCorrectionParams {
    trueCourse: number;
    trueAirSpeed: number;
    windDir: number;
    windVelocity: number;
}

/**
 * calculate the delta between the angles 
 */
const directionDelta = (windDir: number, trueCourse: number): number => {
    return Math.sin(toRadian(windDir) - toRadian(trueCourse));
}


/**
 * Calculate wind correction
 * @param {WindCorrectionParams} args 
 */
const windCorrection = ({ trueCourse, trueAirSpeed, windDir, windVelocity }: WindCorrectionParams): number => {
    const dirDelta = directionDelta(windDir, trueCourse);
    const num = (dirDelta * windVelocity) / trueAirSpeed;
    const correctionRad = Math.asin(num);

    return fromRadian(correctionRad);
}

export { windCorrection }; 