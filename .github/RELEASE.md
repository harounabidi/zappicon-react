# GitHub Actions Setup

This repository uses GitHub Actions to automate the release process with Changesets.

## Workflows

### 1. CI (`ci.yml`)

- Runs on all pull requests and pushes to main
- Installs dependencies
- Runs linting
- Runs tests
- Builds the package

### 2. Release (`release.yml`)

- Runs only on pushes to main branch
- Creates release PRs when changesets are present
- Automatically publishes to npm when release PRs are merged

## Setup Required

To enable automatic publishing, you need to configure these secrets in your GitHub repository:

### NPM_TOKEN

1. Go to [npmjs.com](https://npmjs.com) and log in
2. Go to Access Tokens in your account settings
3. Create a new "Automation" token
4. Copy the token
5. In your GitHub repository, go to Settings → Secrets and variables → Actions
6. Create a new secret named `NPM_TOKEN` and paste your token

### GITHUB_TOKEN

This is automatically provided by GitHub Actions, no setup required.

## Workflow

1. **Make changes** to your code
2. **Create a changeset**: `npm run changeset`
3. **Commit and push** your changes (including the changeset file)
4. **Create a PR** - CI will run automatically
5. **Merge the PR** - Release workflow will create a "Release PR"
6. **Merge the Release PR** - Package will be automatically published to npm

## Manual Release

If you prefer to release manually:

```bash
npm run version  # Update versions from changesets
npm run release  # Build and publish
```
