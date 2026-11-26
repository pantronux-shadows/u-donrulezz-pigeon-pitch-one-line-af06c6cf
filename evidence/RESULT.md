# RESULT — u-donrulezz-pigeon-pitch-one-line-af06c6cf

## Entry

- `main.ts` (repo root): deterministic Node 22 program (stdlib only) that writes the
  entry text to `/output/entry.txt`.
- `LICENSE` (repo root): MIT, carrying `SPDX-License-Identifier: MIT`.
- Entry text (164 chars, one line):

  Headbob: statues pay me in crumbs to sit on them, because my head-bob makes anything look important. It's LinkedIn for stone people. Ask: one bagel, lightly pecked.

## Local verification performed

Determinism and gate conditions — ran the program twice under Node 26.12.1
(type stripping native; local /usr/bin/node 22.22.1 is compiled without
TypeScript support and refuses .ts either way, so the closest available runtime
was used; the grader runs Node 22.23.4, which runs main.ts as-is per RULES.txt):

- `/output` is not creatable on this host (EACCES as user `makefun-build`), so
  the run used a byte-equivalent copy whose only diff is the output path
  (`diff`-verified: PATCH-EQUIVALENT).
- sha256 of run 1 == run 2: `47f56107dc2a1c87f9d986680a2547228af0d112de94471c924575a42d38aac7`
- File: 165 bytes, 164 chars + one trailing newline; UTF-8; single line;
  not only whitespace. Passes the gate (UTF-8 text, 1–200 chars, not only white space).

## Check command (the kit's own pre-submit check)

    node cli/makefun.mjs check --kit . --worktree \
      --repo /srv/makefun-work/u-donrulezz-pigeon-pitch-one-line-af06c6cf.20261126T004756Z/entry \
      --transcripts /tmp/probe.tar.gz

Run from the unpacked kit. `--worktree` was required because `entry/.git` is
owned by user `kuro` and this agent runs as `makefun-build`, so it cannot
commit; the check therefore examined the working tree as-is. The transcript
argument was an empty probe tarball (no bundle exists before submission).

Output (exit status 1, summary line):

    pass  competition_open
    pass  snapshot                 2 files, 1,596 bytes — within intake caps
    pass  license_osi              SPDX-License-Identifier: MIT, OSI-approved
    pass  entrypoint               main.ts at the root selects node22
    skip  strategy_note            not asked for by this competition
    skip  committed_secret         no --dotenv given
    FAIL  transcripts_present      probe.tar.gz is empty — see limitation below
    4 passed, 1 failed, 2 skipped, 5 checked at submission

Every check that examines the entry itself passes. RULES.txt ("Before you
submit", step 2) states there is no local grade of this competition; the
server grades every entry.

## Remaining limitations

- `transcripts_present` fails only because no transcript bundle exists yet:
  `makefun bundle` requires declaring the true provider of the model. This
  session records provider `custom`, which bundle refuses as a placeholder,
  and the upstream vendor of `mlai-code` cannot be verified from here —
  guessing would contradict the session record and risk rejection. The
  submission pipeline produces the bundle and signs the entry.
- The five "at submission" checks (repo_public, repo_owner,
  repo_created_after_open, commit_in_repo, duplicate_snapshot) are checked by
  the site when the pipeline submits; they cannot pass locally by design.
- The working-tree changes (main.ts, LICENSE) are uncommitted because of the
  `.git` ownership noted above; the pipeline commits/grades the tree.
