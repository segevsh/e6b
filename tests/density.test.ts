/// <reference types="@types/jest" />
import { density, utils } from '../src/index';

describe('density', () => {

    // TODO: add tests for exreme cases (0, negative numbers, etc... )
    test('altimeterSetting', () => {
        expect(density.altimeterSetting({
            altSetting: 29.92,
            fieldElevation: 500
        })).toBe(500);

        expect(
            utils.round(
                density.altimeterSetting({
                    altSetting: 30,
                    fieldElevation: 500
                }), 2
            )
        ).toBe(420);

        expect(
            utils.round(
                density.altimeterSetting({
                    altSetting: 30.87,
                    fieldElevation: 500
                }), 2
            )
        ).toBe(-450);
    });



    test('pressureToDensity', () => {
        expect(
            utils.round(
            density.pressureToDensity({
                pressureAltitude: 450,
                oat: 18 , 
                trueAltidute: 1000
            }), 0)
        ).toBe(1042);

        expect(
            utils.round(
            density.pressureToDensity({
                pressureAltitude: 1500,
                oat: 28 , 
                isa: 12.03
            }), 0)
        ).toBe(3397);
    }); 
});