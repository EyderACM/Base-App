export const base2 = {
  name: "base 2",
  baseValue: "2",
  dictionary: { "0": 0, "1": 1 },
};

export const base3 = {
  name: "base 3",
  baseValue: "3",
  dictionary: { ...base2.dictionary, "2": 2 },
};

export const base4 = {
  name: "base 4",
  baseValue: "4",
  dictionary: { ...base3.dictionary, "3": 3 },
};

export const base5 = {
  name: "base 5",
  baseValue: "5",
  dictionary: { ...base4.dictionary, "4": 4 },
};

export const base6 = {
  name: "base 6",
  baseValue: "6",
  dictionary: { ...base5.dictionary, "5": 5 },
};

export const base7 = {
  name: "base 7",
  baseValue: "7",
  dictionary: { ...base6.dictionary, "6": 6 },
};

export const base8 = {
  name: "base 8",
  baseValue: "8",
  dictionary: { ...base7.dictionary, "7": 7 },
};

export const base9 = {
  name: "base 9",
  baseValue: "9",
  dictionary: { ...base8.dictionary, "8": 8 },
};

export const base10 = {
  name: "base 10",
  baseValue: "10",
  dictionary: { ...base9.dictionary, "9": 9 },
};

export const base16 = {
  name: "base 16",
  baseValue: "16",
  dictionary: {
    ...base10.dictionary,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  },
};
