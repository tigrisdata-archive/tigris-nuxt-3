import * as fs from "node:fs/promises";
import * as path from "node:path";

const main = async () => {
  const response = await fetch("https://api.nobelprize.org/v1/prize.json");
  const json = await response.json();
  const prizes = json.prizes;
  prizes.forEach((prize: { year: number }) => {
    prize.year = Number(prize.year);
  });

  const seedDirName = "seed";
  const seedFilePath = path.join(seedDirName, "prizes.json");
  await fs.mkdir(seedDirName, { recursive: true });
  await fs.writeFile(seedFilePath, JSON.stringify(prizes, null, 2));
};

main();
