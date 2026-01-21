# Google Analytics Setup Instructions

## Overview
Google Analytics 4 (GA4) tracking code has been added to all HTML pages in this repository.

## Implementation Details
The Google Analytics tracking code has been added to the following pages:
- index.html
- about.html
- contact.html
- how-to-plan.html
- more-info.html
- privacy.html
- scenarios.html
- tutorials.html

The tracking code is placed immediately after the `<head>` tag in each HTML file, following Google's recommended best practices.

## Next Steps: Replace Placeholder Tracking ID

**IMPORTANT:** The current implementation uses a placeholder tracking ID: `G-XXXXXXXXXX`

To activate Google Analytics tracking, you need to:

1. **Get your Google Analytics Measurement ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property or use an existing one
   - Navigate to Admin → Data Streams → Web
   - Copy your Measurement ID (it will look like `G-XXXXXXXXXX`)

2. **Replace the placeholder in all HTML files:**
   - Find and replace all instances of `G-XXXXXXXXXX` with your actual Measurement ID
   - You can use a find-and-replace tool or run this command:
   ```bash
   # Replace G-XXXXXXXXXX with your actual tracking ID
   find . -name "*.html" -type f -exec sed -i 's/G-XXXXXXXXXX/G-YOUR-ACTUAL-ID/g' {} \;
   ```

3. **Verify the implementation:**
   - Deploy the updated files to your website
   - Visit your website and open browser developer tools
   - Check the Network tab for requests to `googletagmanager.com`
   - Visit Google Analytics Real-Time reports to see active users

## Code Structure
Each page now includes this tracking code immediately after `<head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Privacy Considerations
Make sure to update your privacy policy (privacy.html) if needed to mention Google Analytics data collection in accordance with GDPR and other privacy regulations.
