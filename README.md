[![segevsh](https://circleci.com/gh/segevsh/e6b.svg?style=svg)](https://segevs.com)
[![segevsh](https://img.shields.io/npm/v/e6b-lib)](https://www.npmjs.com/package/e6b-lib)

# e6b-lib

E6B library is a lightweight Javscript / Typescript library to perform E6B calculations.

Some of the calculations included:

## Features

- Groundspeed calculator
- ETE (estimated time enroute)
- Fuel consumption
- Wind correction calculator
- Wind components
- Converters (distances, measurements, etc...)

## Getting started

### Installation

Installing using npm

```bash
npm install e6b-lib
```

Installing using yarn

```bash
yarn add e6b-lib
```

### Usage

Calculating wind correction
```typescript

import { windCorrection } from "e6b-lib";

const wc = windCorrection({
  trueAirSpeed: 80,
  trueCourse: 300,
  windDir: 280,
  windVelocity: 10,
  magneticVariation: 12,
});

console.log(wc.windCorrectionAngle); // -2
console.log(wc.trueHeading); // 298
console.log(wc.magneticHeading); // 310 
console.log(wc.groundSpeed); // 77 
```

Calculating wind components (crosswind / headwind)

```typescript

import { windComponents } from "e6b-lib";

 const wc = windComponents({
    runway: 4, // runway 04
    windDirection: 50, 
    windSpeed: 10
});

console.log(wc.crossWind); // 1.74
console.log(wc.headWind); // 9.85
```
