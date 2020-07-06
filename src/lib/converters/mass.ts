import { ConversionCategory } from "../../interfaces/Conversions";

const poundInGrams = 4.5359237e2;

export const mass: ConversionCategory = {
	kilogram: {multiplier: 1e3},
	kilograms: {multiplier: 1e3},
	kg: {multiplier: 1e3},

	gram: {multiplier: 1},
	grams: {multiplier: 1},
	g: {multiplier: 1},

	decagram: {multiplier: 10},
	decagrams: {multiplier: 10},
	dag: {multiplier: 10},

	hectogram: {multiplier: 1e2},
	hectograms: {multiplier: 1e2},
	hg: {multiplier: 1e2},

	megagram: {multiplier: 1e6},
	megagrams: {multiplier: 1e6},
	Mg: {multiplier: 1e6},

	tonne: {multiplier: 1e6},
	tonnes: {multiplier: 1e6},
	'metric ton': {multiplier: 1e6},
	'metric tons': {multiplier: 1e6},
	t: {multiplier: 1e6},

	gigagram: {multiplier: 1e9},
	gigagrams: {multiplier: 1e9},
	Gg: {multiplier: 1e9},

	teragram: {multiplier: 1e12},
	teragrams: {multiplier: 1e12},
	Tg: {multiplier: 1e12},

	petagram: {multiplier: 1e15},
	petagrams: {multiplier: 1e15},
	Pg: {multiplier: 1e15},

	exagram: {multiplier: 1e18},
	exagrams: {multiplier: 1e18},
	Eg: {multiplier: 1e18},

	zettagram: {multiplier: 1e21},
	zettagrams: {multiplier: 1e21},
	Zg: {multiplier: 1e21},

	yottagram: {multiplier: 1e24},
	yottagrams: {multiplier: 1e24},
	Yg: {multiplier: 1e24},

	decigram: {multiplier: 1e-1},
	decigrams: {multiplier: 1e-1},
	dg: {multiplier: 1e-1},

	centigram: {multiplier: 1e-2},
	centigrams: {multiplier: 1e-2},
	cg: {multiplier: 1e-2},

	milligram: {multiplier: 1e-3},
	milligrams: {multiplier: 1e-3},
	mg: {multiplier: 1e-3},

	microgram: {multiplier: 1e-6},
	micrograms: {multiplier: 1e-6},
	µg: {multiplier: 1e-6},

	nanogram: {multiplier: 1e-9},
	nanograms: {multiplier: 1e-9},
	ng: {multiplier: 1e-9},

	picogram: {multiplier: 1e-12},
	picograms: {multiplier: 1e-12},
	pg: {multiplier: 1e-12},

	femtogram: {multiplier: 1e-15},
	femtograms: {multiplier: 1e-15},
	fg: {multiplier: 1e-15},

	attogram: {multiplier: 1e-18},
	attograms: {multiplier: 1e-18},
	ag: {multiplier: 1e-18},

	zeptogram: {multiplier: 1e-21},
	zeptograms: {multiplier: 1e-21},
	zg: {multiplier: 1e-21},

	yoctogram: {multiplier: 1e-24},
	yoctograms: {multiplier: 1e-24},
	yg: {multiplier: 1e-24},

	pound: {multiplier: poundInGrams},
	pounds: {multiplier: poundInGrams},
	lb: {multiplier: poundInGrams},

	stone: {multiplier: poundInGrams * 14},
	stones: {multiplier: poundInGrams * 14},
	st: {multiplier: poundInGrams * 14},

	ounce: {multiplier: poundInGrams / 16},
	ounces: {multiplier: poundInGrams / 16},
	oz: {multiplier: poundInGrams / 16},
	'℥': {multiplier: poundInGrams / 16},

	'short ton': {multiplier: poundInGrams * 2000},
	'short tons': {multiplier: poundInGrams * 2000},
	'us ton': {multiplier: poundInGrams * 2000},
	'us tons': {multiplier: poundInGrams * 2000},

	'long ton': {multiplier: poundInGrams * 2240},
	'long tons': {multiplier: poundInGrams * 2240},
	'imperial ton': {multiplier: poundInGrams * 2240},
	'imperial tons': {multiplier: poundInGrams * 2240},
	'displacement ton': {multiplier: poundInGrams * 2240},
	'displacement tons': {multiplier: poundInGrams * 2240}
};
