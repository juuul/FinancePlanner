# PR Preview Environments

This repository is configured with automatic preview environments for every pull request. This allows reviewers to see live changes before merging.

## How It Works

When you open or update a pull request, GitHub Actions automatically:

1. **Builds and deploys** your changes to a unique preview URL
2. **Posts a comment** on the PR with the preview link
3. **Updates** the preview whenever you push new commits
4. **Cleans up** the preview environment when the PR is closed or merged

## Preview URLs

Each PR gets a unique preview URL following this pattern:

```
https://juuul.github.io/FinancePlanner/pr-preview/pr-{NUMBER}/
```

Where `{NUMBER}` is your PR number.

## For Contributors

### Accessing Your Preview

1. Open or update your pull request
2. Wait for the "Deploy PR Preview" workflow to complete (usually takes ~1 minute)
3. Look for the automated comment with your preview URL
4. Click the link to view your changes live

### What Gets Deployed

The preview includes:
- `index.html` - Main website page
- `assets/` - All CSS, JavaScript, and other assets
- Any static files needed for the website to function

### What Doesn't Get Deployed

- Documentation files (`.md`)
- Git-related files (`.git`, `.github`)
- Configuration files

### Updating Your Preview

Simply push new commits to your PR branch. The preview will automatically rebuild and update within about a minute.

### Important Notes

- Previews are hosted on GitHub Pages using the `gh-pages` branch
- Each preview is completely isolated - they don't interfere with each other
- Previews are automatically cleaned up when PRs are closed/merged
- The preview uses the same base path as the production site

## For Repository Maintainers

### Workflow Files

Two workflows manage the preview environments:

1. **`.github/workflows/pr-preview.yml`** - Deploys previews when PRs are opened or updated
2. **`.github/workflows/pr-preview-cleanup.yml`** - Removes previews when PRs are closed

### Required Permissions

The workflows need:
- `contents: write` - To push to the gh-pages branch
- `pull-requests: write` - To comment on PRs

### GitHub Pages Configuration

Ensure GitHub Pages is configured to:
- Source: Deploy from `gh-pages` branch
- Folder: `/ (root)`

### Troubleshooting

**Preview not deploying?**
- Check that the "Deploy PR Preview" workflow completed successfully
- Verify GitHub Pages is enabled for the repository
- Ensure the gh-pages branch exists

**Preview showing 404?**
- Wait a few minutes for GitHub Pages to update
- Check that the preview directory exists in the gh-pages branch

**Preview not cleaning up?**
- Check that the "Cleanup PR Preview" workflow completed successfully
- Manually remove the directory from gh-pages branch if needed

## Technical Details

### Deployment Process

1. Workflow checks out the PR branch
2. Workflow checks out the gh-pages branch into a subdirectory
3. Files are copied to `gh-pages/pr-preview/pr-{NUMBER}/`
4. Changes are committed and pushed to gh-pages branch
5. GitHub Pages automatically updates (usually within 1-2 minutes)

### Cleanup Process

1. Workflow checks out the gh-pages branch
2. Removes the `pr-preview/pr-{NUMBER}/` directory
3. Commits and pushes the changes
4. Posts a cleanup confirmation comment

## Benefits

✅ **See changes live** - Review actual functionality, not just code  
✅ **Faster reviews** - Reviewers can interact with changes immediately  
✅ **Catch issues early** - Find UI/UX problems before merging  
✅ **Safe testing** - Isolated environments don't affect production  
✅ **Automatic cleanup** - No manual maintenance required  

## Questions or Issues?

If you encounter any issues with preview environments, please:
1. Check the workflow run logs in the Actions tab
2. Open an issue with details about the problem
3. Tag repository maintainers for assistance
