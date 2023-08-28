import { TBank } from "../interface/bank.interface";

export const DEFAULT_FORMAT = [3, 1, 5, 1];

export const format: Record<TBank, number[]> = {
    kbank: DEFAULT_FORMAT, // xxx-x-xxxxx-x
    bbl: DEFAULT_FORMAT,
    ktb: DEFAULT_FORMAT,
    ttb: [3, 6, 1], // Aka. TMB
    scb: DEFAULT_FORMAT,
    bay: DEFAULT_FORMAT,
    kkp: [3, 6, 1],
    cimbt: DEFAULT_FORMAT,
    tisco: [4, 3, 6, 1],
    uob: [3, 3, 3, 1],
    baac: [3, 1, 5, 3],
    gsb: [3, 1, 5, 3],
    ghb: [3, 1, 5, 3],
    ibst: DEFAULT_FORMAT,
    citi: [3, 6, 1],
};
