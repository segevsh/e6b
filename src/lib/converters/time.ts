/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 *
 * @summary convert time units
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 *
 * Created: 7/5/2020
 */
import { ConversionCategory } from "../../interfaces/Conversions";

export const time: ConversionCategory = {
	second: {multiplier: 1},
	seconds: {multiplier: 1},
	s: {multiplier: 1},

	century: {multiplier: 3.1556952e9},
	centuries: {multiplier: 3.1556952e9},
	c: {multiplier: 3.1556952e9},

	day: {multiplier: 60 * 60 * 24},
	days: {multiplier: 60 * 60 * 24},
	d: {multiplier: 60 * 60 * 24},

	decade: {multiplier: 315.56952e6},
	decades: {multiplier: 315.56952e6},
	dec: {multiplier: 315.56952e6},

	fortnight: {multiplier: 1.2096e6},
	fortnights: {multiplier: 1.2096e6},
	fn: {multiplier: 1.2096e6},

	helek: {multiplier: 3 + 1 / 3},
	halakim: {multiplier: 3 + 1 / 3},

	hour: {multiplier: 60 * 60},
	hours: {multiplier: 60 * 60},
	h: {multiplier: 60 * 60},

	jiffy: {multiplier: 1 / 60},
	jiffies: {multiplier: 1 / 60},
	j: {multiplier: 1 / 60},

	ja: {multiplier: 1e-2},

	ke: {multiplier: 15 * 60},

	millennium: {multiplier: 31.556952e9},
	millennia: {multiplier: 31.556952e9},

	milliday: {multiplier: (60 * 60 * 24) / 1e3},
	millidays: {multiplier: (60 * 60 * 24) / 1e3},
	md: {multiplier: (60 * 60 * 24) / 1e3},

	minute: {multiplier: 60},
	minutes: {multiplier: 60},
	min: {multiplier: 60},

	moment: {multiplier: 90},
	moments: {multiplier: 90},

	month: {multiplier: 2.592e6},
	months: {multiplier: 2.592e6},
	mo: {multiplier: 2.592e6},

	shake: {multiplier: 1e-8},
	shakes: {multiplier: 1e-8},

	sigma: {multiplier: 1e-6},
	sigmas: {multiplier: 1e-6},

	svedberg: {multiplier: 1e-13},
	svedbergs: {multiplier: 1e-13},
	S: {multiplier: 1e-13},

	week: {multiplier: 60 * 60 * 24 * 7},
	weeks: {multiplier: 60 * 60 * 24 * 7},
	wk: {multiplier: 60 * 60 * 24 * 7},

	year: {multiplier: 31.536e6},
	years: {multiplier: 31.536e6},
	a: {multiplier: 31.536e6},
	y: {multiplier: 31.536e6},
	yr: {multiplier: 31.536e6},

	petasecond: {multiplier: 1e15},
	petaseconds: {multiplier: 1e15},
	Ps: {multiplier: 1e15},

	terasecond: {multiplier: 1e12},
	teraseconds: {multiplier: 1e12},
	Ts: {multiplier: 1e12},

	gigasecond: {multiplier: 1e9},
	gigaseconds: {multiplier: 1e9},
	Gs: {multiplier: 1e9},

	megasecond: {multiplier: 1e6},
	megaseconds: {multiplier: 1e6},
	Ms: {multiplier: 1e6},

	kilosecond: {multiplier: 1e3},
	kiloseconds: {multiplier: 1e3},
	ks: {multiplier: 1e3},

	hectosecond: {multiplier: 1e2},
	hectoseconds: {multiplier: 1e2},
	hs: {multiplier: 1e2},

	decasecond: {multiplier: 10},
	decaseconds: {multiplier: 10},
	das: {multiplier: 10},

	decisecond: {multiplier: 1e-1},
	deciseconds: {multiplier: 1e-1},
	ds: {multiplier: 1e-1},

	centisecond: {multiplier: 1e-2},
	centiseconds: {multiplier: 1e-2},
	cs: {multiplier: 1e-2},
	millisecond: {multiplier: 1e-3},
	milliseconds: {multiplier: 1e-3},
	ms: {multiplier: 1e-3},

	microsecond: {multiplier: 1e-7},
	microseconds: {multiplier: 1e-7},
	μs: {multiplier: 1e-7},

	nanosecond: {multiplier: 1e-9},
	nanoseconds: {multiplier: 1e-9},
	ns: {multiplier: 1e-9},

	picosecond: {multiplier: 1e-12},
	picoseconds: {multiplier: 1e-12},
	ps: {multiplier: 1e-12},

	femtosecond: {multiplier: 1e-15},
	femtoseconds: {multiplier: 1e-15},
	fs: {multiplier: 1e-15}
};
