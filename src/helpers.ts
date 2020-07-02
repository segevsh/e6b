/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 *
 * @summary Helper methods
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 *
 * Created: 7/1/2020
 */


// convert a number to a radian 
const toRadian = (value: number): number => {
    return value * Math.PI / 180.0;
}

// convert a  radian to number
const fromRadian = (value: number): number => {
    return 180 * value / Math.PI;
}



export {
    toRadian, 
    fromRadian
}