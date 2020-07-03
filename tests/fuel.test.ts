/// <reference types="@types/jest" />
import { fuelRequired } from '../src/lib/fuel';

describe('fuel tests', () => {

    // TODO: add tests for exreme cases (0, negative numbers, etc... )
    test('fuelConsumption', () => {

        const res1 = fuelRequired(3.95, 7);
        expect(res1).toBeTruthy();
        expect(res1).toBe(0.46);
        console.log(res1);
    });
});