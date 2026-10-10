# .github Directory

This directory contains GitHub-specific configurations and workflows for the Finance Planner repository

## 📁 Contents

### Workflows

- **[deploy-gh-pages.yml](workflows/deploy-gh-pages.yml)** - Deploys the production site from main branch to GitHub Pages
- **[pr-preview.yml](workflows/pr-preview.yml)** - Automatically deploys PR preview environments
- **[pr-preview-cleanup.yml](workflows/pr-preview-cleanup.yml)** - Cleans up preview environments when PRs close
- **[feature-preview.yml](workflows/feature-preview.yml)** - Publishes feature branches to an isolated test URL

### Documentation

- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Setup instructions for repository maintainers
- **[PR_PREVIEW.md](PR_PREVIEW.md)** - Documentation for PR preview environments
- **[PR_PREVIEW_EXAMPLE.md](PR_PREVIEW_EXAMPLE.md)** - Examples of preview system in action

## 🚀 Quick Start

### For Contributors

When you open a pull request, a preview environment is automatically created. You'll receive a comment with a link to view your changes live. No setup required!

### For Maintainers

First time setting up? Follow these steps:

1. Read **[SETUP_GUIDE.md](SETUP_GUIDE.md)** for complete instructions
2. Enable GitHub Pages for the repository
3. Create the `gh-pages` branch
4. Configure workflow permissions
5. Test with a sample PR

## 🔄 How It Works

### Production Deployment
```
┌─────────────────────┐
│  Push to main       │
│  branch             │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  deploy-gh-pages    │
│  .yml triggers      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Deploy to          │
│  gh-pages root      │
│  (production site)  │
└─────────────────────┘
```

### PR Preview System
```
┌─────────────────────┐
│  Pull Request       │
│  Opened/Updated     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  pr-preview.yml     │
│  Workflow Triggers  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Deploy to          │
│  gh-pages branch    │
│  pr-preview/pr-N/   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Comment Posted     │
│  with Preview URL   │
└─────────────────────┘

When PR Closes/Merges:
┌─────────────────────┐
│  pr-preview-        │
│  cleanup.yml        │
│  Removes Directory  │
└─────────────────────┘
```

### Feature Preview System

Push a branch named `feature/...` to publish it automatically, or run **Deploy feature preview** manually and enter any branch name. The site is published below:

```
https://financeplannerapp.com/feature-preview/<branch-name>/
```

This path is separate from production, which is still deployed only from `main`.

## 📚 Documentation Structure

- **SETUP_GUIDE.md** - Technical setup for maintainers
  - GitHub Pages configuration
  - Branch creation
  - Permissions setup
  - Troubleshooting

- **PR_PREVIEW.md** - User-facing documentation
  - How preview environments work
  - For contributors
  - For maintainers
  - Technical details

- **PR_PREVIEW_EXAMPLE.md** - Visual examples
  - What comments look like
  - URL structure
  - Expected behavior

## 🔒 Security

The workflows use minimal permissions:
- `contents: write` - For deploying to gh-pages branch
- `pull-requests: write` - For posting comments

These permissions are scoped to the specific workflows and cannot access other repository features.

## 🐛 Troubleshooting

Common issues and solutions:

| Issue | Solution |
|-------|----------|
| Workflow fails | Check workflow permissions in Settings → Actions |
| 404 on preview URL | Wait 1-2 minutes for GitHub Pages to update |
| No comment posted | Verify "Allow GitHub Actions to create and approve pull requests" is enabled |
| Preview not updating | Check that workflow ran successfully in Actions tab |

For detailed troubleshooting, see [SETUP_GUIDE.md](SETUP_GUIDE.md).

## 📝 Maintenance

### Regular Checks

- Monitor workflow runs in the Actions tab
- Check for orphaned preview directories in gh-pages branch
- Review workflow logs for errors

### Updating Workflows

When updating workflow files:
1. Test changes in a fork first
2. Validate YAML syntax
3. Update documentation if behavior changes
4. Test with a sample PR

## 🤝 Contributing

Improvements to the preview system are welcome! If you want to enhance the workflows or documentation:

1. Open an issue to discuss the changes
2. Submit a PR with your improvements
3. Update documentation to reflect changes
4. Test thoroughly with sample PRs

## 📖 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Script Action](https://github.com/actions/github-script)
- [Repository Contributing Guide](../CONTRIBUTING.md)

---

**Questions?** Open an issue or check the [Community Discussions](https://github.com/juuul/FinancePlanner/discussions).
