# CLAUDE.md Best Practices

## What to Include

Structure content around three axes:

- **WHAT** — Tech stack, directory map, module relationships. Especially critical in monorepos.
- **WHY** — Purpose and function of the different parts of the project.
- **HOW** — Build commands, test commands, verification steps, non-default conventions.

Only document what Claude gets *wrong* or cannot infer. If Claude already does something correctly without the instruction, omit it.

---

## The Progressive Disclosure Pattern

The single most important architectural pattern. Instead of one long file:

1. Keep task-specific documentation in separate, self-descriptively named files:
   ```
   agent_docs/
   ├── building_the_project.md
   ├── running_tests.md
   ├── code_conventions.md
   ├── service_architecture.md
   └── database_schema.md
   ```
2. In `CLAUDE.md`, include a brief index of these files with a one-line description of each and instruct Claude to read only the relevant ones before starting work.
3. **Prefer pointers to copies.** Reference `path/to/docs.md` inline rather than `@`-embedding entire files, which injects them into every run regardless of relevance.

---

## Monorepos

Use a hierarchy of CLAUDE.md files rather than one bloated root file. Claude loads ancestor and descendant files together.

```
/CLAUDE.md              ← global conventions, top-level map
/frontend/CLAUDE.md     ← frontend-specific context
/backend/CLAUDE.md      ← backend-specific context
```

---

## Compaction

When context auto-compacts, Claude summarizes what it deems most important. You can influence this:

```md
## Compaction Instructions
When compacting, always preserve:
- The full list of modified files
- Any active test commands
- The current task's acceptance criteria
```

---

## Anti-Patterns

| Anti-Pattern | Fix |
|---|---|
| File over 200 lines | Ruthlessly prune; move detail to referenced docs |
| `@`-file embedding in every run | Replace with inline path references |
| Negations without alternatives (`Never use --foo-bar`) | Always pair with the preferred alternative (`prefer --baz`) |
| Code snippets in the file | Replace with a pointer to the relevant source file |
| Generic guidance not specific to your project | Delete it |
| Documenting things Claude already does correctly | Delete it |

---

## Bootstrapping

1. Run `/init` — Claude analyzes your codebase and generates a starter file.
2. Refine based on your team's actual practices; remove anything generic.
3. Add workflow instructions Claude couldn't infer (branch naming, deployment steps, review requirements).
4. Use the `#` key during sessions to capture instructions you find yourself repeating — these accumulate naturally into the file over time.
5. Commit to version control.

---

## Governing Principle

> A short, precise CLAUDE.md that reflects your project's actual quirks and failure modes will consistently outperform an exhaustive one. Discipline over completeness.
