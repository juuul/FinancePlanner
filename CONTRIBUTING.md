# Contributing to Finance Planner

Thank you for your interest in contributing to Finance Planner! We welcome contributions from the community.

## How to Contribute

### 1. Fork and Clone

1. Fork this repository
2. Clone your fork locally
3. Create a new branch for your contribution

```bash
git clone https://github.com/YOUR-USERNAME/FinancePlanner.git
cd FinancePlanner
git checkout -b my-feature-branch
```

### 2. Make Your Changes

- Edit the HTML, CSS, or JavaScript files as needed
- Test your changes locally by opening `index.html` in a web browser
- Ensure your changes work properly and don't break existing functionality

### 3. Submit a Pull Request

1. Commit your changes with clear, descriptive commit messages
2. Push your branch to your fork
3. Open a Pull Request from your fork to the main repository

```bash
git add .
git commit -m "Description of your changes"
git push origin my-feature-branch
```

## PR Preview Environments

When you open a pull request, an automated preview environment will be deployed! 🚀

- A unique preview URL will be posted as a comment on your PR
- The preview updates automatically when you push new commits
- Reviewers can see your changes live before merging
- The preview is automatically cleaned up when the PR is closed

Learn more about [PR Preview Environments](.github/PR_PREVIEW.md).

## Project Structure

```
FinancePlanner/
├── index.html              # Main website page
├── assets/
│   ├── css/
│   │   └── styles.css     # Website styles
│   └── js/
│       └── script.js      # Website functionality and translations
├── README.md              # Project documentation
└── .github/
    ├── workflows/         # GitHub Actions workflows
    └── PR_PREVIEW.md      # Preview environment documentation
```

## Development Guidelines

### HTML

- Keep markup semantic and accessible
- Use `data-i18n` attributes for translatable text
- Maintain consistent indentation (4 spaces)

### CSS

- Follow existing style patterns
- Keep selectors specific but not overly complex
- Test responsive behavior at different screen sizes

### JavaScript

- Add translations to both `en` and `nl` language objects
- Test all interactive features
- Keep code readable and well-commented when necessary

### Translations

This website supports English and Dutch. When adding new text:

1. Add the text to the HTML using a `data-i18n` attribute
2. Add translations to the `translations` object in `assets/js/script.js`
3. Test both language versions

Example:
```html
<!-- HTML -->
<p data-i18n="mySection.myText">Default English text</p>
```

```javascript
// JavaScript (script.js)
translations: {
    en: {
        mySection: {
            myText: "English text"
        }
    },
    nl: {
        mySection: {
            myText: "Nederlandse tekst"
        }
    }
}
```

## Testing

Before submitting your PR:

1. **Visual Testing**: Open `index.html` in multiple browsers
2. **Language Toggle**: Test both English and Dutch versions
3. **Responsive Design**: Test on different screen sizes
4. **Links**: Verify all links work correctly
5. **Interactive Features**: Test all buttons and interactive elements

## Code Style

- Use clear, descriptive variable and function names
- Keep code DRY (Don't Repeat Yourself)
- Write code that's easy to read and understand
- Follow existing patterns in the codebase

## Questions?

If you have questions or need help:

- 💬 [Community Discussions](https://github.com/juuul/FinancePlanner/discussions)
- 📝 Open an issue for bugs or feature requests
- 📧 Check the README for additional resources

## Code of Conduct

Please be respectful and constructive in all interactions. We're building a welcoming community for everyone interested in financial planning and the F.I.R.E. movement.

---

Thank you for contributing to Finance Planner! Your efforts help make financial planning more accessible to everyone.
