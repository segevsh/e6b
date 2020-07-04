/// <reference types="@types/jest" />
import { windComponents } from '../src/lib/windComponents';

describe('Wind components tests', () => {

    // TODO: add tests for exreme cases (0, negative numbers, etc... )
    test('windCorrection', () => {

        const res1 = windComponents({
            runway: 4,
            windDirection: 50,
            windSpeed: 10
        });

        console.log(res1);
        expect(res1).toBeTruthy();
        expect(res1.crossWind).toBe(1.74);
        expect(res1.headWind).toBe(9.85);
    });
});