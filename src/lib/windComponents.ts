/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 *
 * Wind components calculator breaks wind aditude into its crosswind / headwind
 * components in relation to the tailwind direction (runway)
 *
 * @summary Wind components calculator
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 *
 * Created: 7/3/2020
 */

import { WindComponentsResult, WindComponentsParams } from "../interfaces/WindCorrection";
import {
    toRadian,
    round
} from '../utils';

/**
 * 
 */
const windComponents = ({ runway, windDirection, windSpeed }: WindComponentsParams): WindComponentsResult => {
    if (runway < 1 || runway > 36) {
        throw new Error('Runway must be between 1-36');
    }


    // α = (Wind heading° - Tailwind Heading°)
    const alpha = windDirection - (10 * runway);

    const crossWind = round(windSpeed * Math.sin(toRadian(alpha)), 2);
    const headWind = round(windSpeed * Math.cos(toRadian(alpha)), 2);

    return {
        crossWind,
        headWind
    };
}


export { windComponents };