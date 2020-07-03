/// <reference types="@types/jest" />
import { flightTime } from '../src/lib/groundSpeed';

describe('groundSpeed tests', () => {

    // TODO: add tests for exreme cases (0, negative numbers, etc... )
    test('flightTime', () => {

        const res1 = flightTime(76, 5);
        expect(res1).toBeTruthy();
        expect(res1.formatted).toBe('00:03:57');
        expect(res1.minutes).toBe(3.95);
        expect(res1.seconds).toBe(236.84);
        console.log(res1);
    });
});