/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 * 
 * @summary Interfaces for wind correction calculations
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 * 
 * Created: 7/2/2020
 */

export interface WindCorrectionParams {
    trueCourse: number;
    trueAirSpeed: number;
    windDir: number;
    windVelocity: number;
    magneticVariation?: number;
}


export interface WindCorrectionResult {
    windCorrectionAngle: number;
    trueHeading: number;
    magneticHeading: number;
    groundSpeed?: number;
}

export interface WindComponentsParams {
    runway: number,
    windDirection: number,
    windSpeed: number
}

export interface WindComponentsResult {
    headWind: number;
    crossWind: number;
}
