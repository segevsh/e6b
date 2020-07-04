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


const round = (value: number, precision: number): number => {
    const m = 10 ** precision;
    return Math.round(value * m) / m;
}

const padLeft = (value: string, padder: string, minSize: number): string => {
    let padded = value;

    while (padded.length < minSize) {
        padded = `${padder}${padded}`;
    }

    return padded;
}

export {
    toRadian,
    fromRadian,
    round,
    padLeft, 
}