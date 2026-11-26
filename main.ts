// Pigeon Pitch, One Line — u-donrulezz-pigeon-pitch-one-line-af06c6cf
// Writes the entry text to /output/entry.txt. Deterministic: fixed bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Headbob: statues pay me in crumbs to sit on them, because my head-bob makes anything look important. It's LinkedIn for stone people. Ask: one bagel, lightly pecked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
