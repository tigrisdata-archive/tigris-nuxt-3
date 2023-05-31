import { Prize } from "./db/prize";

export interface YearLookup {
  [key: number]: Prize[] | undefined;
}

export const createPrizeLookup = (prizes: Prize[]): YearLookup => {
  const lookup: YearLookup = {};

  (prizes as Prize[]).forEach((prize: Prize) => {
    if (!lookup[prize.year]) {
      lookup[prize.year] = [];
    }
    lookup[prize.year]?.push(prize);
  });

  return lookup;
};
