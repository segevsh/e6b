/// <reference types="@types/jest" />
import { convert, utils } from '../src/index';

describe('converters', () => {

    // TODO: add tests for exreme cases (0, negative numbers, etc... )
    test('convert', () => {
        expect(utils.round(convert(1).from('mile').to('km'), 2)).toBe(1.61);
        expect(utils.round(convert(1).from('km').to('m'), 2)).toBe(1000);
        expect(utils.round(convert(0).from('C').to('F'), 2)).toBe(32);
        expect(utils.round(convert(32).from('fahrenheit').to('celsius'), 2)).toBe(0);
        expect(utils.round(convert(32).from('fahrenheit').to('kelvins'), 2)).toBe(273.15);
    });
});