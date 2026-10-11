# AGENTS.md - Instructions for AI Code Agents

## Project Overview

**Finance Planner** is a Jekyll-based static website for the Finance Planner app, hosted on GitHub Pages. The site promotes the app and includes a bilingual blog section (English + Dutch).

---

## Core Workflows

### 1. Gemfile Management ⚠️

**CRITICAL:** The `Gemfile` must NEVER be committed to GitHub. It causes conflicts with the GitHub Pages build process.

```bash
# Local development
bundle exec jekyll serve

# Never commit Gemfile to git
```

---

### 2. Blog Posts

All blog posts must be published in both English and Dutch.

#### Front Matter Requirements

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-03-04
author: "Author Name"
lang: en              # 'en' or 'nl'
permalink: blog_YYYY_MM_DD_slug.html
asset_prefix: ""       # "" for EN, "../" for NL
description: "SEO description"
alternate_lang: nl     # The alternate language
alternate_url: nl/blog_YYYY_MM_DD_slug.html  # URL of alternate version
---
```

#### File Structure

```
_posts/
├── 2026-03-04-fire-financial-independence-retire-early.md (EN)
└── 2026-03-04-fire-financiele-onafhankelijkheid-veertig-plus.md (NL)
```

#### Key Requirements

- Always create 2 versions (EN + NL)
- Permalink format: `blog_YYYY_MM_DD_slug.html`
- NL versions automatically placed in `/nl/` subfolder via permalink
- Language switcher works on blog posts (links to alternate version)

---

### 3. Language Switcher

The language switcher works on **all pages**, including blog posts.

- **Blog posts:** Links to `page.alternate_url`
- **Regular pages:** `nl/page.html` ↔ `page.html`
- **Use relative URLs** (`{{ page.asset_prefix }}`) for preview environments

---

### 4. SEO Implementation

- `<link rel="alternate" hreflang="...">` tags in `<head>`
- `sitemap.xml` contains `xhtml:link` metadata
- Canonical URLs for both languages

---

### 5. Code Conventions

#### HTML
- Use `data-i18n` attributes for translatable text
- Semantic markup
- Consistent indentation (4 spaces)

#### CSS
- Follow existing style patterns
- Keep selectors specific but not overly complex
- Test responsive behavior at different screen sizes

#### JavaScript
- Add translations to both `en` and `nl` language objects
- Test all interactive features
- Keep code readable and well-commented when necessary

#### URLs
- Use relative URLs (`{{ page.asset_prefix }}`) for portability
- This ensures preview environments work correctly

---

### 6. Testing Checklist

Before submitting changes:

- [ ] Open `index.html` in browser
- [ ] Test both languages (EN/NL switcher)
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Test language switcher on all pages + blog posts
- [ ] Test all links (internal + external)
- [ ] For blog posts: test alternate URL linking

---

### 7. PR Process

- Automated preview environments are deployed
- Use descriptive commit messages
- Test locally before pushing

---

### 8. Domains & Preview Environments

**Production:** `https://financeplannerapp.com`

**Preview:** `https://financeplannerapp.com/pr-preview/pr-<number>/`

**Important:** All CSS, JS, images, and links MUST use relative URLs (`{{ page.asset_prefix }}`) to ensure they work correctly in both production and preview environments.

---

## Project Structure

```
FinancePlanner/
├── index.html              # Main website page (EN)
├── nl/                     # Dutch version of main pages
│   └── index.html
├── _posts/                 # Blog posts directory
│   ├── 2026-03-04-*.md    # English posts
│   └── 2026-03-04-*.md    # Dutch posts
├── _layouts/
│   ├── default.html       # Main layout
│   └── post.html          # Blog post layout
├── _data/
│   ├── en.yml             # English translations
│   └── nl.yml             # Dutch translations
├── assets/
│   ├── css/
│   │   └── styles.css     # Website styles
│   ├── js/
│   │   └── script.js      # Website functionality and translations
│   └── images/
│       ├── blog/          # Blog post images
│       └── hero.png       # Hero image
├── blog.html              # English blog index
├── Gemfile                # ⚠️ NEVER COMMIT THIS
└── _config.yml            # Jekyll configuration
```

---

## Common Tasks

### Adding a New Page

1. Create HTML file with `data-i18n` attributes
2. Add translations to `_data/en.yml` and `_data/nl.yml`
3. Create Dutch version in `nl/` folder
4. Update navigation in `_layouts/default.html` if needed
5. Test both language versions

### Adding a Blog Post

1. Create EN post in `_posts/YYYY-MM-DD-title.md`
2. Place blog images in `assets/images/blog/`
3. Create NL post with same date but Dutch title
4. Add front matter with `alternate_lang` and `alternate_url`
5. Use `asset_prefix: ""` for EN, `"../"` for NL
6. Reference images using: `{{ page.asset_prefix }}assets/images/blog/my-image.png`
7. Test language switcher on the post

### Updating Translations

1. Find existing translation keys in `_data/en.yml` and `_data/nl.yml`
2. Add new keys to both files
3. Use `data-i18n` attributes in HTML to reference them

---

## Important Notes

- **All pages are bilingual:** Every page exists in English and Dutch
- **Preview environments:** Use relative URLs so preview URLs work correctly
- **Blog posts:** Always create both EN and NL versions
- **Gemfile:** Never commit to GitHub - causes build conflicts
- **Mobile design:** Layout is flexible and adapts to available space. Navigation menu uses hamburger menu on mobile for optimized user experience.

---

## References

- [BLOG_README.md](BLOG_README.md) - Detailed blog post documentation
- [CONTRIBUTING.md](CONTRIBUTING.md) - General contributing guidelines