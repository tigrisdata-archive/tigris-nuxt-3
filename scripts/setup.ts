import { Tigris } from "@tigrisdata/core";
import { Prize } from "../src/db/prize";

const main = async () => {
  const tigris = new Tigris();
  await tigris.getDatabase().initializeBranch();
  await tigris.registerSchemas([Prize]);
};

main()
  .then(() => {
    console.log("✅ setup complete");
  })
  .catch((ex) => {
    console.error("❌ error in setup", ex);
  });
