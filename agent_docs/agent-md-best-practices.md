# AGENTS.md Best Practices

## What It Is

AGENTS.md is a project instruction file for coding agents. It gives stateless agents the durable project context they need
to work safely in the repository: architecture, commands, conventions, verification expectations, and pointers to deeper
docs.

---

## Hard Architectural Limits

| Constraint | Threshold |
|---|---|
| Max reliable instructions | ~150-200 for strong reasoning models; fewer for smaller models |
| Recommended max file length | ~200 lines; shorter is usually better |
| Code snippets | Avoid - they go stale quickly |
| Negations without alternatives | Avoid - always provide the preferred path |

---

## What to Include

Structure content around three axes:

- **WHAT** - Tech stack, directory map, module relationships. Especially critical in monorepos.
- **WHY** - Purpose and function of the different parts of the project.
- **HOW** - Build commands, test commands, verification steps, non-default conventions.

Only document what agents commonly get wrong, cannot infer from local files, or must preserve for project safety. If an
agent already does something correctly without the instruction, omit it.

---

## The Progressive Disclosure Pattern

The most important maintainability pattern is to keep the root instruction file short and point to focused docs:

1. Keep task-specific documentation in separate, self-descriptively named files:
   ```
   agent_docs/
   ├── building_the_project.md
   ├── running_tests.md
   ├── code_conventions.md
   ├── service_architecture.md
   └── database_schema.md
   ```
2. In `AGENTS.md`, include a brief index of these files with a one-line description of each.
3. Tell agents to read only the relevant focused docs before changing that area.
4. Prefer pointers to copies. Reference `path/to/docs.md` inline rather than embedding whole files into every run.

---

## Monorepos

Use a hierarchy of AGENTS.md files rather than one bloated root file. Agents should load or be given the nearest relevant
instructions for the area being changed.

```
/AGENTS.md              <- global conventions, top-level map
/frontend/AGENTS.md     <- frontend-specific context
/backend/AGENTS.md      <- backend-specific context
```

---

## Compaction

When long-running agent sessions compact or summarize context, explicit preservation rules help keep the work coherent:

```md
## Compaction Instructions
When compacting, always preserve:
- The current task description and acceptance criteria
- The full list of modified files
- Any active build or test commands and their latest results
- Relevant focused-doc pointers already consulted
```

---

## Anti-Patterns

| Anti-Pattern | Fix |
|---|---|
| File over 200 lines | Prune aggressively; move detail to referenced docs |
| Embedding large files in every run | Replace with inline path references |
| Negations without alternatives (`Never use --foo-bar`) | Pair with the preferred alternative (`prefer --baz`) |
| Code snippets in the file | Replace with a pointer to the relevant source file |
| Generic guidance not specific to your project | Delete it |
| Documenting things agents already infer correctly | Delete it |
| Tool-specific instructions without a fallback | Explain the capability needed and the acceptable alternative |

---

## Bootstrapping

1. Generate or draft an initial AGENTS.md from the repository structure.
2. Refine it based on actual agent failure modes and team practices; remove generic filler.
3. Add workflow instructions agents cannot infer, such as branch naming, deployment steps, and review requirements.
4. Add an `agent_docs/` index for deeper docs and keep the root file focused on routing agents to the right context.
5. Commit the instruction file and update it when recurring corrections appear in reviews.

---

## Governing Principle

> A short, precise AGENTS.md that reflects the project's actual quirks and failure modes will outperform an exhaustive
> one. Discipline over completeness.
