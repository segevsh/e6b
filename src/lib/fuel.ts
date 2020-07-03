/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 * 
 * Calculate fuel consumption
 * 
 * @summary Calculate fuel consumption
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 * 
 * Created: 7/2/2020
 */

/**
 * Calculate amount of fuel will be consumed
 * @param minutes minutes - fractions allowed. 
 * @param consumptionPerHour 
 */
const fuelRequired = (minutes: number, consumptionPerHour: number): number => {
    return Number((consumptionPerHour / 60 * minutes).toFixed(2));
}

export { fuelRequired };