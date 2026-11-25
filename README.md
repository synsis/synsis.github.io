# synsis.github.io

Minimal chronological PDF & notes archive hosted at https://synsis.github.io/.

## How to add a new PDF

1. Copy your PDF into `papers/`, e.g. `papers/2026-12-01-my-paper-v2.pdf`.
2. Add an entry to `papers/manifest.js`:
   ```js
   {
     id: "my-paper-v2",
     date: "2026-12-01",
     version: "v2",
     status: "Preprint",
     title: "Paper Title",
     subtitle: "Optional Subtitle",
     tags: ["Tag1", "Tag2"],
     pdf: "papers/2026-12-01-my-paper-v2.pdf",
     code: "https://github.com/synsis/...",
     abstract: "..."
   }
   ```
3. Commit and push to `master`. The homepage automatically sorts and groups all entries by date.
