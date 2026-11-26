// Smart fridge roast entry
import { mkdirSync, writeFileSync } from "node:fs";

const text = "My smart fridge streams Netflix; its milk has reached end of support.";

const length = [...text].length;
if (length < 1 || length > 200 || text.trim().length === 0) {
  throw new Error("Entry must be 1-200 nonblank Unicode characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, text, "utf8");
