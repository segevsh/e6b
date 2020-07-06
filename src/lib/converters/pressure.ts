/**
 * Copyright (c) 2020 - Segev {CJ} Shmueli
 *
 * @summary Convert pressure units
 * @author Segev {CJ} Shmueli <cj@segevs.com>
 *
 * Created: 7/5/2020
 */
import { ConversionCategory } from "../../interfaces/Conversions";

export const pressure: ConversionCategory = {
	pascal: { multiplier: 1 },
	pascals: { multiplier: 1 },
	Pa: { multiplier: 1 },

	inHg: { multiplier: 1 / 3386 },

	femtopascal: { multiplier: 1e-15 },
	femtopascals: { multiplier: 1e-15 },
	fPa: { multiplier: 1e-15 },

	picopascal: { multiplier: 1e-12 },
	picopascals: { multiplier: 1e-12 },
	pPa: { multiplier: 1e-12 },

	nanopascal: { multiplier: 1e-9 },
	nanopascals: { multiplier: 1e-9 },
	nPa: { multiplier: 1e-9 },

	micropascal: { multiplier: 1e-6 },
	micropascals: { multiplier: 1e-6 },
	μPa: { multiplier: 1e-6 },

	millipascal: { multiplier: 1e-3 },
	millipascals: { multiplier: 1e-3 },
	mPa: { multiplier: 1e-3 },

	centipascal: { multiplier: 1e-2 },
	centipascals: { multiplier: 1e-2 },
	cPa: { multiplier: 1e-2 },

	decipascal: { multiplier: 0.1 },
	decipascals: { multiplier: 0.1 },
	dPa: { multiplier: 0.1 },

	decapascal: { multiplier: 10 },
	decapascals: { multiplier: 10 },
	daPa: { multiplier: 10 },

	hectopascal: { multiplier: 1e2 },
	hectopascals: { multiplier: 1e2 },
	hPa: { multiplier: 1e2 },

	kilopascal: { multiplier: 1e3 },
	kilopascals: { multiplier: 1e3 },
	kPa: { multiplier: 1e3 },

	megapascal: { multiplier: 1e6 },
	megapascals: { multiplier: 1e6 },
	MPa: { multiplier: 1e6 },

	gigapascal: { multiplier: 1e9 },
	gigapascals: { multiplier: 1e9 },
	GPa: { multiplier: 1e9 },

	terapascal: { multiplier: 1e12 },
	terapascals: { multiplier: 1e12 },
	TPa: { multiplier: 1e12 },

	petapascal: { multiplier: 1e15 },
	petapascals: { multiplier: 1e15 },
	PPa: { multiplier: 1e15 },

	bar: { multiplier: 1e5 },

	femtobar: { multiplier: 1e-15 },
	femtobars: { multiplier: 1e-15 },
	fbar: { multiplier: 1e-15 },

	picobar: { multiplier: 1e-12 },
	picobars: { multiplier: 1e-12 },
	pbar: { multiplier: 1e-12 },

	nanobar: { multiplier: 1e-9 },
	nanobars: { multiplier: 1e-9 },
	nbar: { multiplier: 1e-9 },

	microbar: { multiplier: 1e-6 },
	microbars: { multiplier: 1e-6 },
	μbar: { multiplier: 1e-6 },

	millibar: { multiplier: 1e-3 },
	millibars: { multiplier: 1e-3 },
	mbar: { multiplier: 1e-3 },

	centibar: { multiplier: 1e-2 },
	centibars: { multiplier: 1e-2 },
	cbar: { multiplier: 1e-2 },

	decibar: { multiplier: 0.1 },
	decibars: { multiplier: 0.1 },
	dbar: { multiplier: 0.1 },

	decabar: { multiplier: 10 },
	decabars: { multiplier: 10 },
	dabar: { multiplier: 10 },

	hectobar: { multiplier: 1e2 },
	hectobars: { multiplier: 1e2 },
	hbar: { multiplier: 1e2 },

	kilobar: { multiplier: 1e3 },
	kilobars: { multiplier: 1e3 },
	kbar: { multiplier: 1e3 },

	megabar: { multiplier: 1e6 },
	megabars: { multiplier: 1e6 },
	Mbar: { multiplier: 1e6 },

	gigabar: { multiplier: 1e9 },
	gigabars: { multiplier: 1e9 },
	Gbar: { multiplier: 1e9 },

	terabar: { multiplier: 1e12 },
	terabars: { multiplier: 1e12 },
	Tbar: { multiplier: 1e12 },

	petabar: { multiplier: 1e15 },
	petabars: { multiplier: 1e15 },
	Pbar: { multiplier: 1e15 },

	torr: { multiplier: 101325 / 760 },

	millitorr: { multiplier: 101325 / 760 / 1e3 },
	millitorrs: { multiplier: 101325 / 760 / 1e3 },
	mTorr: { multiplier: 101325 / 760 / 1e3 },

	atmosphere: { multiplier: 101325 },
	atmospheres: { multiplier: 101325 },
	atm: { multiplier: 101325 }
};