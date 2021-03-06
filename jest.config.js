module.exports = {
    // setupTestFrameworkScriptFile: './jest.setup.js',
    // setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'node',

    "globals":  {
        "ts-jest": {

            "tsConfig": "<rootDir>/tsconfig.spec.json",
        }
    },

    "roots": [
        "<rootDir>/tests",
        "<rootDir>/src",
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
}
