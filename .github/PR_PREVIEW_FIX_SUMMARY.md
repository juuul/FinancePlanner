# PR Preview Fix Summary

## Problem

The PR preview workflows were failing with the following error:
```
The process '/usr/bin/git' failed with exit code 1
```

This occurred because the workflows tried to checkout the `gh-pages` branch, which didn't exist yet.

## Root Cause

The original workflows assumed the `gh-pages` branch already existed and would fail if it wasn't manually created first. This required manual setup before the PR preview system could work.

## Solution

The workflows have been updated to automatically handle the `gh-pages` branch creation:

### Changes to `pr-preview.yml`

**Before:** Used `actions/checkout@v4` to check out the gh-pages branch, which would fail if the branch didn't exist.

**After:** 
1. Checks if gh-pages branch exists using `git ls-remote`
2. If it exists, uses `git worktree` to check it out
3. If it doesn't exist, automatically creates it by:
   - Creating an orphan branch (clean history)
   - Adding an initial README
   - Creating the `pr-preview` directory structure
   - Pushing the new branch to origin
   - Setting up a worktree for deployment

### Changes to `pr-preview-cleanup.yml`

**Before:** Directly tried to checkout gh-pages branch, which would fail if it didn't exist.

**After:**
1. First checks if gh-pages branch exists using `git ls-remote`
2. Only runs cleanup steps if the branch exists
3. Gracefully skips cleanup if there's nothing to clean up

### Changes to `SETUP_GUIDE.md`

- Updated prerequisites to reflect that gh-pages branch is now auto-created
- Reordered steps to prioritize workflow permissions (required for auto-creation)
- Added notes about automatic branch creation
- Updated troubleshooting section with new scenarios
- Clarified that manual branch creation is now optional

## Benefits

✅ **Zero manual setup required** - The gh-pages branch is created automatically on first PR  
✅ **More robust** - Workflows handle missing branch gracefully  
✅ **Easier onboarding** - Contributors can see previews immediately  
✅ **Better error handling** - Clear messages when branch creation is needed  
✅ **Backward compatible** - Still works if branch is created manually  

## What Maintainers Need to Do

### Required Setup (One-time)

Only one step is required before the workflows can function:

1. **Configure Workflow Permissions** (in Settings → Actions → General):
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

### Optional Setup

2. **Enable GitHub Pages** (in Settings → Pages):
   - After first PR deployment, configure Pages to use `gh-pages` branch
   - This can be done immediately or after the first PR

That's it! The gh-pages branch will be created automatically when needed.

## Testing Recommendations

After merging this PR:

1. Create a test pull request with any small change
2. Verify the "Deploy PR Preview" workflow completes successfully
3. Check that the gh-pages branch was created
4. Visit the preview URL to confirm it works
5. Close the test PR and verify cleanup runs successfully

## Technical Details

### Branch Creation Process

When gh-pages doesn't exist, the workflow:

1. Creates an orphan branch (`gh-pages-temp`) with no history
2. Removes all files from working directory
3. Creates initial README explaining the branch purpose
4. Creates `pr-preview/` directory for PR previews
5. Commits and pushes to `gh-pages` branch
6. Switches back to PR branch
7. Sets up worktree for deployment
8. Continues with normal preview deployment

### Authentication

The workflow uses the `GITHUB_TOKEN` provided by GitHub Actions, which is automatically configured by `actions/checkout@v4`. No additional authentication setup is needed.

### Worktree Approach

The workflow uses `git worktree` to manage the gh-pages branch alongside the main working directory. This allows the workflow to:
- Keep the PR branch checked out in the main directory
- Work with gh-pages branch in a subdirectory
- Avoid complex branch switching that could lose authentication

## Rollback Plan

If issues arise, you can:

1. Manually create the gh-pages branch using the instructions in SETUP_GUIDE.md
2. The workflow will detect it exists and skip the creation step
3. Revert this PR if needed (workflows will return to requiring manual setup)

## Questions?

If you encounter any issues:
1. Check workflow logs in the Actions tab
2. Verify workflow permissions are configured
3. See SETUP_GUIDE.md for troubleshooting steps
4. Open an issue if problems persist
