# Setup Guide for PR Preview Environments

This guide helps repository maintainers set up the PR preview environment system.

## Prerequisites

Before the PR preview workflows can function, you need to:

1. **GitHub Pages must be enabled** for this repository
2. **The `gh-pages` branch must exist**
3. **Workflow permissions must be configured**

## Step-by-Step Setup

### 1. Create the gh-pages Branch

The workflows will deploy to the `gh-pages` branch. If it doesn't exist yet, create it:

**Option A: Create from GitHub UI**
1. Go to repository Settings → Pages
2. Under "Source", select "Deploy from a branch"
3. Select "gh-pages" branch and "/ (root)" folder
4. If gh-pages doesn't exist, GitHub will create it when you push to it

**Option B: Create via Command Line**
```bash
# Clone the repository
git clone https://github.com/juuul/FinancePlanner.git
cd FinancePlanner

# Create orphan branch (no history)
git checkout --orphan gh-pages

# Add initial content (deploy main site)
git rm -rf .
git checkout main -- index.html assets

# Create directory for PR previews
mkdir -p pr-preview

# Create README for gh-pages
cat > README.md << 'EOF'
# GitHub Pages Branch

This branch contains the deployed website and PR preview environments.

- **Root directory**: Production website (main branch)
- **pr-preview/**: Preview environments for open pull requests

⚠️ This branch is automatically managed by GitHub Actions. Do not edit manually.
EOF

# Commit and push
git add .
git commit -m "Initialize gh-pages branch"
git push origin gh-pages
```

### 2. Configure GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**:
   - Select "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Click **Save**

Your site will be available at: `https://juuul.github.io/FinancePlanner/`

### 3. Configure Workflow Permissions

The workflows need permission to push to the gh-pages branch:

1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**

### 4. Test the Workflows

After merging this PR:

1. Create a test pull request with a small change
2. Wait for the "Deploy PR Preview" workflow to complete
3. Check for the automated comment with the preview URL
4. Visit the preview URL to verify it works
5. Close the PR and verify the cleanup workflow runs

## Verifying the Setup

### Check GitHub Pages Status

Go to **Settings** → **Pages** and verify:
- ✅ Your site is live at `https://juuul.github.io/FinancePlanner/`
- ✅ Source is set to `gh-pages` branch

### Check Workflow Permissions

Go to **Settings** → **Actions** → **General** and verify:
- ✅ Workflow permissions are set to "Read and write"
- ✅ "Allow GitHub Actions to create and approve pull requests" is enabled

### Check Branch Protection (Optional)

For the `gh-pages` branch, you might want to:
- Prevent direct pushes (only allow via Actions)
- Go to **Settings** → **Branches** → **Add rule**
- Branch name pattern: `gh-pages`
- Check "Restrict pushes that create matching branches"

## Troubleshooting

### Workflow Fails: "Permission denied"

**Problem**: Workflow can't push to gh-pages branch

**Solution**: 
1. Check workflow permissions in Settings → Actions → General
2. Ensure "Read and write permissions" is selected
3. Verify gh-pages branch exists

### Preview Shows 404

**Problem**: Preview URL returns 404 error

**Possible Causes**:
1. GitHub Pages not enabled
2. gh-pages branch doesn't exist
3. Workflow failed to deploy
4. GitHub Pages hasn't updated yet (can take 1-2 minutes)

**Solutions**:
1. Enable GitHub Pages in Settings → Pages
2. Create gh-pages branch (see step 1)
3. Check workflow logs in Actions tab
4. Wait a few minutes and try again

### Comment Not Posted

**Problem**: Workflow completes but no comment appears

**Solution**:
1. Check "Allow GitHub Actions to create and approve pull requests" is enabled
2. Check workflow logs for errors
3. Verify the workflow has `pull-requests: write` permission

### Preview Not Updating

**Problem**: Push new commits but preview doesn't update

**Solution**:
1. Check that the "Deploy PR Preview" workflow ran after the new commit
2. Clear browser cache
3. Wait 1-2 minutes for GitHub Pages to update
4. Check workflow logs for errors

## Directory Structure on gh-pages Branch

```
gh-pages/
├── index.html          # Production site (root)
├── assets/             # Production assets
└── pr-preview/         # PR previews
    ├── pr-1/           # Preview for PR #1
    │   ├── index.html
    │   └── assets/
    ├── pr-2/           # Preview for PR #2
    │   ├── index.html
    │   └── assets/
    └── pr-123/         # Preview for PR #123
        ├── index.html
        └── assets/
```

## Maintenance

### Orphaned Preview Directories

If a cleanup workflow fails, preview directories might remain:

1. Manually check the gh-pages branch
2. Remove any `pr-preview/pr-XXX/` directories for closed PRs
3. Commit and push the changes

```bash
git checkout gh-pages
rm -rf pr-preview/pr-123  # Replace 123 with PR number
git add .
git commit -m "Cleanup orphaned preview for PR #123"
git push
```

### Monitoring

Regularly check:
- **Actions tab**: Review workflow runs for failures
- **gh-pages branch**: Ensure preview directories are being cleaned up
- **GitHub Pages**: Verify site is accessible

## Security Considerations

### Permissions

The workflows have:
- `contents: write` - To push to gh-pages branch
- `pull-requests: write` - To comment on PRs

These are the minimal permissions needed. Do not grant additional permissions.

### Branch Protection

Consider protecting the `gh-pages` branch:
- Only allow pushes via GitHub Actions
- Prevent direct commits from users
- Require successful workflow runs

### PR Content

Be aware that PR previews make code publicly accessible before merge:
- Don't include secrets or sensitive data in code
- Review PRs before they're deployed
- Close malicious PRs immediately (cleanup runs automatically)

## Questions?

If you encounter issues:
1. Check workflow logs in the **Actions** tab
2. Review this guide for common problems
3. Open an issue for additional help
