## Code Quality with ESLint

A React + TypeScript project demonstrating automated code quality management using ESLint for comprehensive code reviews.

### Local dev

```bash
npm install
npm run dev
npm run lint  # Run ESLint checks locally
```

### Code Quality Setup

This project uses ESLint as the backbone of our code review process:

- **Automated Quality Gates**: Blocks PRs with ESLint errors
- **PR Integration**: Posts detailed feedback directly in pull request comments
- **TypeScript Support**: Full TypeScript and React rules integration
- **Smart Triggers**: Runs on PRs and main branch pushes

The configuration lives in `eslint.config.js` and uses TypeScript and React rules. The GitHub Actions workflow (`.github/workflows/eslint.yml`) handles CI integration.

### Code Review Workflow

1. Developer opens a PR
2. ESLint automatically scans for code quality issues, potential bugs, and style violations
3. Workflow fails if errors are found (quality gate enforcement)
4. Detailed feedback appears as PR comments with specific line numbers and rule violations
5. Human reviewers focus on architecture and business logic instead of syntax/quality issues

