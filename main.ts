import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "My owner feeds me, shelters me, and worships me daily — 1 star, would not recommend the 3 AM vacuum.";

// Gate: the entry must be 1–200 characters (code points), one line, not blank.
const len = [...REVIEW].length;
if (len < 1 || len > 200 || REVIEW.trim().length === 0) {
  throw new Error(`entry length ${len} is outside the 1–200 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(REVIEW);
