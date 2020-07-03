"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="@types/jest" />
var windCorrection_1 = require("../src/lib/windCorrection");
describe('Wind correction tests', function () {
    // TODO: add tests for exreme cases (0, negative numbers, etc... )
    test('windCorrection', function () {
        var res1 = Math.round(windCorrection_1.windCorrection({
            trueCourse: 305,
            windDir: 4,
            trueAirSpeed: 80,
            windVelocity: 7
        }));
        expect(res1).toBeTruthy();
        expect(res1).toBe(4);
        var res2 = Math.round(windCorrection_1.windCorrection({
            trueCourse: 305,
            windDir: 330,
            trueAirSpeed: 99,
            windVelocity: 10
        }));
        expect(res2).toBeTruthy();
        expect(res2).toBe(2);
    });
});
