# Maintainer Checklist - PR Preview Setup

Use this checklist after merging this PR to complete the setup of the PR preview environment system.

## ✅ Pre-Merge

- [x] Review all workflow files
- [x] Review all documentation
- [x] Verify YAML syntax is valid
- [x] Understand the technical implementation

## 📋 Post-Merge Setup (Required)

Complete these steps to activate the PR preview system:

### Step 1: Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**:
   - Select "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Click **Save**

**Status:** [ ] Complete

### Step 2: Create gh-pages Branch

Choose **Option A** (GitHub will create it) or **Option B** (manual creation):

**Option A: Let GitHub Create It**
1. GitHub Pages will create the branch automatically
2. Wait 1-2 minutes after enabling Pages

**Option B: Manual Creation**
```bash
# Clone repo
git clone https://github.com/juuul/FinancePlanner.git
cd FinancePlanner

# Create and switch to gh-pages branch
git checkout --orphan gh-pages

# Copy current website files
git rm -rf .
git checkout main -- index.html assets

# Create preview directory
mkdir -p pr-preview

# Commit and push
git add .
git commit -m "Initialize gh-pages branch"
git push origin gh-pages
```

**Status:** [ ] Complete

### Step 3: Configure Workflow Permissions

1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**

**Status:** [ ] Complete

### Step 4: Verify Setup

1. Check that GitHub Pages is live:
   - Go to Settings → Pages
   - Look for: "Your site is live at https://juuul.github.io/FinancePlanner/"
2. Verify gh-pages branch exists:
   - Check branches list in repo
3. Verify workflow permissions:
   - Settings → Actions → General
   - Should show "Read and write permissions"

**Status:** [ ] Complete

## 🧪 Testing (Recommended)

After setup is complete, test the system:

### Test 1: Create Test PR

1. Create a new branch with a small change
   ```bash
   git checkout -b test-pr-preview
   echo "<!-- Test -->" >> index.html
   git commit -am "Test PR preview"
   git push origin test-pr-preview
   ```
2. Open a PR from this branch
3. Wait for "Deploy PR Preview" workflow to complete (~1 minute)
4. Check for automated comment with preview URL
5. Visit the preview URL and verify it works

**Status:** [ ] Complete

### Test 2: Update Test PR

1. Make another change to the same branch
   ```bash
   echo "<!-- Test 2 -->" >> index.html
   git commit -am "Update test PR"
   git push
   ```
2. Wait for workflow to complete
3. Verify preview URL updates (clear browser cache if needed)
4. Check that the existing comment was updated (not duplicated)

**Status:** [ ] Complete

### Test 3: Close Test PR

1. Close or merge the test PR
2. Wait for "Cleanup PR Preview" workflow to complete
3. Check for cleanup confirmation comment
4. Verify preview directory is removed from gh-pages branch
   ```bash
   git checkout gh-pages
   git pull
   ls -la pr-preview/  # Should not contain test PR directory
   ```
5. Verify preview URL returns 404

**Status:** [ ] Complete

## 📢 Communication

After successful testing:

### Announce to Contributors

Post in repository discussions or create an announcement:

```markdown
🚀 **PR Preview Environments Now Available!**

We've added automatic preview environments for all pull requests! 

When you open a PR, you'll receive a comment with a unique URL where 
you can see your changes live. The preview updates automatically with 
each commit.

Check out our [Contributing Guide](CONTRIBUTING.md) for more details!
```

**Status:** [ ] Complete

### Update Issue/PR Templates (Optional)

Consider adding a note about previews in PR templates:

```markdown
## Preview

Once this PR is opened, a preview environment will be automatically 
deployed. Check the automated comment for the preview URL.
```

**Status:** [ ] Complete

## 🔍 Monitoring

After deployment, regularly check:

- [ ] Workflow runs in Actions tab for failures
- [ ] Preview directories in gh-pages branch for orphaned previews
- [ ] GitHub Pages deployment status

## 📝 Troubleshooting

If something doesn't work, see:
- `.github/SETUP_GUIDE.md` - Detailed troubleshooting
- `.github/PR_PREVIEW.md` - Common issues and solutions

## ✅ Completion Checklist

Mark complete when all steps are done:

- [ ] GitHub Pages enabled
- [ ] gh-pages branch created
- [ ] Workflow permissions configured
- [ ] System tested with sample PR
- [ ] Contributors notified
- [ ] Documentation reviewed

## 🎉 Success!

Once all items are checked, the PR preview system is fully operational!

Contributors will now get automatic preview environments for their PRs.

---

**Questions?** Reference the complete documentation:
- [Setup Guide](.github/SETUP_GUIDE.md)
- [PR Preview Documentation](.github/PR_PREVIEW.md)
- [Contributing Guide](../CONTRIBUTING.md)
