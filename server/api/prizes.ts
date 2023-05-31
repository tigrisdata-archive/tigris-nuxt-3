import { Tigris } from "@tigrisdata/core";
import { Prize } from "../../src/db/prize";

const tigris = new Tigris();
const prizes = tigris.getDatabase().getCollection<Prize>(Prize);

export default defineEventHandler(async () => {
  return { hello: "world" };
  // const find = prizes.findMany();
  // const allPrizes = await find.toArray();
  // console.log(allPrizes);
  // return await allPrizes;
});
