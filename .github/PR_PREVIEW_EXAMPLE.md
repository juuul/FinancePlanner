# PR Preview Comment Example

When you open or update a pull request, you'll receive an automated comment like this:

---

## 🚀 Preview environment deployed!

**📱 View your changes live:**
### [https://juuul.github.io/FinancePlanner/pr-preview/pr-123/](https://juuul.github.io/FinancePlanner/pr-preview/pr-123/)

This preview will be automatically updated when you push new commits to this PR.

---
*Preview environments are cleaned up when the PR is closed or merged.*

---

## After PR is Closed

When the PR is closed or merged, you'll receive a cleanup confirmation:

---

🧹 Preview environment has been cleaned up.

---

## Preview URL Structure

Each PR gets a unique URL based on its number:

- **PR #1**: `https://juuul.github.io/FinancePlanner/pr-preview/pr-1/`
- **PR #2**: `https://juuul.github.io/FinancePlanner/pr-preview/pr-2/`
- **PR #123**: `https://juuul.github.io/FinancePlanner/pr-preview/pr-123/`

This ensures each PR has its own isolated preview environment.
