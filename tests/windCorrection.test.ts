/// <reference types="@types/jest" />
import { windCorrection } from '../src/lib/windCorrection';

describe('Wind correction tests', () => {

    // TODO: add tests for exreme cases (0, negative numbers, etc... )
    test('windCorrection', () => {

        const res1 = windCorrection({
            trueCourse: 305,
            windDir: 4,
            trueAirSpeed: 80,
            windVelocity: 7
        });

        expect(res1).toBeTruthy();
        expect(res1.windCorrectionAngle).toBe(4);

        const res2 = windCorrection({
            trueCourse: 305,
            windDir: 330,
            trueAirSpeed: 99,
            windVelocity: 10
        });
        expect(res2).toBeTruthy();
        expect(res2.windCorrectionAngle).toBe(2);
    });
});