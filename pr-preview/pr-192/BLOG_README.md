# Blog Section Documentation

## Overview

The Finance Planner website now includes a fully functional blog section that supports both English and Dutch languages. The blog is built using Jekyll's native posts collection and is fully compatible with GitHub Pages.

## How to Add a New Blog Post

### Step 1: Create the Post File

Blog posts are stored in the `_posts` directory. The filename must follow this format:

```
YYYY-MM-DD-title-with-hyphens.md
```

**Example:**
- `2026-02-28-my-fire-journey.md`
- `2026-03-15-saving-strategies.md`

### Step 2: Add Front Matter

Every blog post must start with YAML front matter. Here's the required structure:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-02-28
author: "Author Name"
lang: en
permalink: blog_2026_02_28_your-post-title.html
asset_prefix: ""
description: "A brief description of your post for SEO"
alternate_lang: nl
alternate_url: nl/blog_2026_02_28_your-post-title.html
---
```

**Front Matter Fields:**

- `layout`: Always use `post` for blog posts
- `title`: The title of your blog post (will appear as the main heading)
- `date`: Publication date in YYYY-MM-DD format
- `author`: Name of the author (optional)
- `lang`: Language code - `en` for English or `nl` for Dutch
- `permalink`: URL of the post. English: `blog_YYYY_MM_DD_slug.html`, Dutch: `nl/blog_YYYY_MM_DD_slug.html`
- `asset_prefix`: Use `""` for English posts, `"../"` for Dutch posts (for proper asset linking)
- `description`: Short description for SEO and previews
- `alternate_lang`: Language code of the alternate version (`nl` on English posts, `en` on Dutch posts)
- `alternate_url`: Permalink of the alternate-language version. Used by the language switcher and the `hreflang` tags in the `<head>`

### Step 3: Write Your Content

After the front matter, write your content using Markdown. The blog system supports:

#### Markdown Features

**Headers:**
```markdown
## Main Section
### Subsection
```

**Lists:**
```markdown
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

**Bold and Italic:**
```markdown
**Bold text**
*Italic text*
```

**Links:**
```markdown
[Link text](https://example.com)
```

**Images:**
Blog images live in `assets/images/blog/`. Always reference them with the asset prefix so they work in both production and preview environments:
```markdown
![Alt text]({{ page.asset_prefix }}assets/images/blog/my-image.png)
```

#### Code Formatting

**Inline Code:**
Use backticks for inline code:
```markdown
Variables like `savingsRate` and `netWorth` are important.
```

**Code Blocks with Syntax Highlighting:**
Use triple backticks with a language identifier:

````markdown
```csharp
public class Example
{
    public void Method()
    {
        Console.WriteLine("Hello World");
    }
}
```

```json
{
  "key": "value",
  "number": 123
}
```

```python
def calculate_fire_number(annual_expenses):
    return annual_expenses * 25
```
````

**Supported Languages for Syntax Highlighting:**
- `csharp` (C#)
- `javascript` (JavaScript)
- `python` (Python)
- `json` (JSON)
- `html` (HTML)
- `css` (CSS)
- `bash` (Bash/Shell)
- And many more...

## Creating Posts in Both Languages

To have a post available in both English and Dutch, create two separate files:

### English Post
**File:** `_posts/2026-02-28-my-fire-journey.md`
```yaml
---
layout: post
title: "My FIRE Journey"
date: 2026-02-28
author: "John Doe"
lang: en
permalink: blog_2026_02_28_my-fire-journey.html
asset_prefix: ""
description: "My personal journey to financial independence"
alternate_lang: nl
alternate_url: nl/blog_2026_02_28_mijn-fire-reis.html
---

Content in English...
```

### Dutch Post
**File:** `_posts/2026-02-28-mijn-fire-reis.md`
```yaml
---
layout: post
title: "Mijn FIRE reis"
date: 2026-02-28
author: "John Doe"
lang: nl
permalink: nl/blog_2026_02_28_mijn-fire-reis.html
asset_prefix: "../"
description: "Mijn persoonlijke reis naar financiële onafhankelijkheid"
alternate_lang: en
alternate_url: blog_2026_02_28_my-fire-journey.html
---

Content in Nederlands...
```

Both versions must exist and their `alternate_url` values must point to each other, otherwise the language switcher will result in a 404.

## Blog Pages

The blog has two main pages:

- **English Blog:** `/blog.html` - Shows all English blog posts
- **Dutch Blog:** `/nl/blog.html` - Shows all Dutch blog posts

These pages automatically display all posts in the corresponding language, sorted by date (newest first).

## Navigation

The blog link has been added to the main navigation menu and will automatically appear in both English and Dutch versions of the site.

## File Structure

```
FinancePlanner/
├── _posts/                          # Blog posts directory
│   ├── 2026-02-28-post-name.md     # English post
│   └── 2026-02-28-post-naam.md     # Dutch post
├── _layouts/
│   └── post.html                    # Blog post layout
├── blog.html                        # English blog index
├── nl/
│   └── blog.html                    # Dutch blog index
├── _data/
│   ├── en.yml                       # English translations (includes blog strings)
│   └── nl.yml                       # Dutch translations (includes blog strings)
└── assets/
    ├── css/
    │   └── styles.css               # Includes blog styles
    └── images/
        └── blog/                    # Blog post images
```

## GitHub Pages Compatibility

The blog system uses only features available in the `github-pages` gem:

- Native Jekyll posts collection
- Kramdown markdown processor with GitHub Flavored Markdown (GFM)
- No additional plugins required
- Syntax highlighting via Rouge (built into Jekyll)

## Language Switcher for Blog Posts

**Important Note:** The language switcher behaves differently for blog posts compared to regular pages:

- **Regular pages** (e.g., about.html, contact.html): The language switcher takes you to the same page in the other language
- **Blog posts**: The language switcher links directly to the alternate-language version of the post, using `alternate_url` from the front matter (see `_layouts/default.html`)

Because post titles and slugs differ between languages, both versions of a post must exist and their `alternate_url` values must point to each other. Until the alternate version exists, the switcher will result in a 404.

The same `alternate_url` is also used for the `<link rel="alternate" hreflang="...">` tags in the `<head>` of both language versions.

## Example Post Template

Create a new file in `_posts/` directory:

```markdown
---
layout: post
title: "Understanding the 4% Rule"
date: 2026-03-01
author: "Finance Planner Team"
lang: en
permalink: blog_2026_03_01_understanding-the-4-percent-rule.html
asset_prefix: ""
description: "A comprehensive guide to the 4% withdrawal rule for retirement planning"
alternate_lang: nl
alternate_url: nl/blog_2026_03_01_de-4-procent-regel.html
---

## Introduction

The 4% rule is a guideline for retirement withdrawals...

## How It Works

The concept is simple: withdraw `4%` of your portfolio in the first year...

### Example Calculation

```csharp
decimal portfolioValue = 1000000m;
decimal withdrawalRate = 0.04m;
decimal firstYearWithdrawal = portfolioValue * withdrawalRate;
// Result: $40,000
```

## Conclusion

The 4% rule provides a **solid starting point** for retirement planning...
```

## Tips

1. **Keep filenames lowercase** with hyphens separating words
2. **Date in filename must match date in front matter**
3. **Test your markdown** before publishing
4. **Use descriptive titles** for better SEO
5. **Include code examples** when discussing technical concepts
6. **Add author attribution** for credibility
7. **Write clear descriptions** for social media sharing

## Preview Your Post

To preview your blog post locally:

1. Install Jekyll: `gem install jekyll bundler`
2. Run: `bundle exec jekyll serve`
3. Visit: `http://localhost:4000/blog.html` (English) or `http://localhost:4000/nl/blog.html` (Dutch)

Or simply push to GitHub and let GitHub Pages build it automatically!
