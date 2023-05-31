import { Tigris } from "@tigrisdata/core";
import { Prize } from "../../src/db/prize";
import { createPrizeLookup } from "../../src/prize-lookup";

const tigris = new Tigris();
const prizes = tigris.getDatabase().getCollection<Prize>(Prize);

export default defineEventHandler(async () => {
  const find = prizes.findMany({
    sort: { field: "year", order: "$desc" },
  });
  const allPrizes = await find.toArray();
  const yearLookup = createPrizeLookup(allPrizes);
  return yearLookup;
});
