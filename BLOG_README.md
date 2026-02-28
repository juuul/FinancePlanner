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
asset_prefix: "../"
description: "A brief description of your post for SEO"
---
```

**Front Matter Fields:**

- `layout`: Always use `post` for blog posts
- `title`: The title of your blog post (will appear as the main heading)
- `date`: Publication date in YYYY-MM-DD format
- `author`: Name of the author (optional)
- `lang`: Language code - `en` for English or `nl` for Dutch
- `asset_prefix`: Use `"../"` for English posts, `"../../"` for Dutch posts (for proper asset linking)
- `description`: Short description for SEO and previews

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
asset_prefix: "../"
description: "My personal journey to financial independence"
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
asset_prefix: "../../"
description: "Mijn persoonlijke reis naar financiële onafhankelijkheid"
---

Content in Nederlands...
```

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
    └── css/
        └── styles.css               # Includes blog styles

```

## GitHub Pages Compatibility

The blog system uses only features available in the `github-pages` gem:

- Native Jekyll posts collection
- Kramdown markdown processor with GitHub Flavored Markdown (GFM)
- No additional plugins required
- Syntax highlighting via Rouge (built into Jekyll)

## Example Post Template

Create a new file in `_posts/` directory:

```markdown
---
layout: post
title: "Understanding the 4% Rule"
date: 2026-03-01
author: "Finance Planner Team"
lang: en
asset_prefix: "../"
description: "A comprehensive guide to the 4% withdrawal rule for retirement planning"
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
3. Visit: `http://localhost:4000/blog.html`

Or simply push to GitHub and let GitHub Pages build it automatically!
