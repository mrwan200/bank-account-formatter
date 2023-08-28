const banks = [
  "bbl",
  "kbank",
  "ktb",
  "ttb",
  "scb",
  "bay",
  "kkp",
  "cimbt",
  "tisco",
  "uob",
  "baac",
  "gsb",
  "ghb",
  "ibst",
  "citi",
] as const;

export type TBank = (typeof banks)[number];
