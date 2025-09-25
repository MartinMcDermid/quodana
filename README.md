## Code Quality with Qodana

A React + TypeScript project demonstrating automated code quality management using JetBrains Qodana for comprehensive code reviews.

### Local dev

```bash
npm install
npm run dev
```

### Code Quality Setup

This project uses Qodana as the backbone of our code review process:

- **Automated Quality Gates**: Blocks PRs with critical issues (`--fail-threshold 0`)
- **PR Integration**: Posts detailed feedback directly in pull request comments
- **Caching**: Optimized workflow performance with dependency caching
- **Smart Triggers**: Runs on PRs, main branch pushes, and release branches

The configuration lives in `qodana.yaml` and uses the latest JS/TS analyzer. The GitHub Actions workflow (`.github/workflows/code_quality.yml`) handles CI integration.

### Configure Qodana token in GitHub

1. Create a Qodana Cloud project and copy the project token.
2. In your GitHub repo: Settings → Secrets and variables → Actions → New repository secret.
3. Add a secret named `QODANA_TOKEN` with the token value.
4. Push a commit or open a PR to trigger the workflow.

Refer to JetBrains Qodana Quick Start for details: [Qodana Quick start](https://www.jetbrains.com/help/qodana/quick-start.html).

### Code Review Workflow

1. Developer opens a PR
2. Qodana automatically scans for quality issues, security vulnerabilities, and code smells
3. Workflow fails if critical issues are found (quality gate enforcement)
4. Detailed feedback appears as PR comments with specific line annotations
5. Human reviewers focus on architecture and business logic instead of syntax/quality issues

