/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 * 
 * Groundspeed related calculations
 * 
 * @summary Groundspeed helpers
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 * 
 * Created: 7/2/2020
 */

import { FlightTimeResults } from "../interfaces/GroundSpeed";
import { round, padLeft } from '../utils';

/**
 * Calculates the time it will take to fly given distance 
 * 
 * @param groundSpeed
 * @param distance 
 */
const flightTime = (groundSpeed: number, distance: number): FlightTimeResults => {

    // speed in seconds 
    const distPerSecond = groundSpeed / 60 / 60;
    const secondsToTravel = distance / distPerSecond;

    const h = Math.floor(secondsToTravel / 3600);
    const m = Math.floor((secondsToTravel - (h * 3600)) / 60);
    const s = Math.round(secondsToTravel - (h * 3600) - (m * 60));

    const hmsH = padLeft(`${h}`, '0', 2);
    const hmsM = padLeft(`${m}`, '0', 2);
    const hmsS = padLeft(`${s}`, '0', 2);

    return {
        formatted: `${hmsH}:${hmsM}:${hmsS}`,
        minutes: round(secondsToTravel / 60, 2),
        seconds: round(secondsToTravel, 2)
    }

}


export { flightTime };