/// <reference types="@types/jest" />
import { converters } from '../src/index';

// import converters from '../src/lib/converters';

describe('converters tests', () => {

    // TODO: add tests for exreme cases (0, negative numbers, etc... )
    test('distances', () => {
        let res = converters.distances.NauticalMileToStatueMile(2);
        expect(res).toBe(2.3);

        res = converters.distances.StatueMileToNauticalMile(1);
        expect(res).toBe(0.87);

        res = converters.distances.feetToMeters(3);
        expect(res).toBe(0.91);

    });

    test('measurements', () => {
        let res = converters.measurements.InHgToHpa(29.92);
        expect(res).toBe(1013.21);

    });
});