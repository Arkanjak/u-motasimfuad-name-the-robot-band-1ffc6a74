import { mkdirSync, writeFileSync } from "node:fs";

const entry = 'Roomba & The Dustbunnies — hit song "Suck It Up (Again)"';

const outputDir = "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, entry, "utf8");
