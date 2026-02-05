# Deployment History

This file tracks deployment events for the Finance Planner website.

## GitHub Pages Configuration

**Important**: GitHub Pages must be enabled for the website to deploy successfully.

If you're seeing a 404 error on the website:
1. Go to: https://github.com/juuul/FinancePlanner/settings/pages
2. Under "Source", select **"Deploy from a branch"**
3. Under "Branch", select **"gh-pages"** branch and **"/ (root)"** folder
4. Click **"Save"**

This is especially necessary if the repository was recently made private and then public again, as GitHub Pages is automatically disabled when a repository becomes private.

## How to Redeploy

The website automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/deploy-gh-pages.yml`.

To trigger a redeployment:
1. Update the "Last Deployment" timestamp below
2. Commit and push to `main` branch (or merge a PR that includes this change)

Alternatively, the workflow can be manually triggered using GitHub Actions' workflow_dispatch feature from the Actions tab.

## Deployment Log

### 2026-02-05 10:55:00 UTC
- Reason: Fix 404 error - GitHub Pages needs to be re-enabled after repository was made private/public
- Issue: Repository was made private yesterday, causing GitHub Pages to be disabled
- Solution: Re-enable GitHub Pages in repository settings (see configuration section above)
- Branch: main

### 2026-02-05 09:36:18 UTC
- Reason: Manual redeployment requested
- Triggered by: Adding deployment tracking documentation
- Branch: main
