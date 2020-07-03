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
import { WindCorrectionParams, WindCorrectionResult } from '../interfaces/WindCorrection';

/**
 * calculate the delta between the angles 
 */
const directionDelta = (windDir: number, trueCourse: number): number => {
    return Math.sin(toRadian(windDir) - toRadian(trueCourse));
}

/**
 * Calculates ground speed from wind correction 
 * @param params 
 * @param value 
 */
const groundSpeed = (params: WindCorrectionParams, value: WindCorrectionResult): number => {
    const cosParam = Math.cos(toRadian(params.trueCourse - params.windVelocity + value.windCorrectionAngle));
    const sums = (params.trueAirSpeed ** 2) + (params.windVelocity ** 2) - (2 * params.trueAirSpeed * params.windVelocity * cosParam);
    return Math.floor(Math.sqrt(sums));
}


/**
 * Calculate wind correction
 * @param {WindCorrectionParams} args 
 */
const windCorrection = (params: WindCorrectionParams): WindCorrectionResult => {
    const { trueCourse, trueAirSpeed, windDir, windVelocity, magneticVariation = 0 } = params;

    const dirDelta = directionDelta(windDir, trueCourse);
    const num = (dirDelta * windVelocity) / trueAirSpeed;
    const correctionRad = Math.asin(num);

    const windCorrectionAngle = Math.round(fromRadian(correctionRad));

    const result: WindCorrectionResult = {
        magneticHeading: trueCourse + windCorrectionAngle + (magneticVariation || 0),
        trueHeading: trueCourse + windCorrectionAngle,
        windCorrectionAngle,
    }

    result.groundSpeed = groundSpeed(params, result);

    return result;
}

export { windCorrection }; 