# User Insights Feature

This document explains how to access and use the user insights feature for Finance Planner.

## Overview

The Finance Planner website now includes a visitor tracking system that allows you to view insights about website visitors. The system uses two approaches:

1. **Local Browser Tracking** - Basic tracking using localStorage (client-side only)
2. **Google Analytics 4** - Professional analytics with comprehensive user insights (recommended)

## Accessing the Insights Page

The insights dashboard is available at:

```
https://financeplannerapp.com/fp-insights.html
```

Or for local development:

```
http://localhost:8000/fp-insights.html
```

## Local Browser Tracking

### What it Does

- Tracks unique visitors using browser localStorage
- Records page visits with timestamps
- Stores visitor information (language, screen resolution, referrer)
- Shows statistics for the current browser only

### Features

- **Total Visits**: Number of page visits from this browser
- **Unique Visitor ID**: Automatically generated ID for this browser
- **First/Last Visit**: Timestamps of first and last visits
- **Page Visit Statistics**: Breakdown of which pages were visited and how many times
- **Export Data**: Download visitor data as JSON

### Limitations

- Data is stored per browser/device (cannot aggregate across all visitors)
- Users can clear their localStorage, which resets tracking
- No cross-device tracking
- Cannot see total unique users across the entire website

## Google Analytics 4 (Recommended)

For comprehensive user analytics across all visitors, we recommend setting up Google Analytics 4.

### Setup Instructions

1. **Create a GA4 Property**
   - Go to [https://analytics.google.com](https://analytics.google.com)
   - Click "Admin" (gear icon in bottom left)
   - Create a new GA4 property
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add Tracking Code**
   
   Add this code to the `<head>` section of all HTML files (replace `G-XXXXXXXXXX` with your actual Measurement ID):

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

3. **View Reports**
   
   Once installed, you can access these reports in Google Analytics:
   
   - **Real-time**: See users currently on your site
   - **Users**: Total users, new vs returning users, user demographics
   - **Acquisition**: How users find your site (organic search, direct, referral, social)
   - **Engagement**: Most visited pages, average engagement time, events
   - **Retention**: User retention over time, cohort analysis
   - **Demographics**: Age, gender, interests (when available)
   - **Location**: Geographic distribution of users

### Key Metrics Available

- **Unique Users Over Time**: Daily, weekly, monthly unique visitor counts
- **Active Users**: 1-day, 7-day, 28-day active users
- **New vs Returning Users**: Understand user loyalty
- **Session Duration**: How long users stay on the site
- **Pages per Session**: Number of pages viewed per visit
- **Bounce Rate**: Percentage of single-page sessions
- **Traffic Sources**: Where users come from

## Privacy Considerations

### Local Browser Tracking

- All data is stored locally in the user's browser
- No data is sent to external servers
- Each user's data is isolated to their device
- No personally identifiable information is collected
- Complies with privacy regulations as data stays on user's device

### Google Analytics

- Collects anonymous usage data
- IP addresses are anonymized by default in GA4
- Complies with GDPR when configured properly
- Users can opt-out using browser extensions
- Should be mentioned in your Privacy Policy

## Technical Details

### Files Added

1. **`assets/js/visitor-tracking.js`** - Client-side tracking script
2. **`fp-insights.html`** - Insights dashboard page
3. **`USER_INSIGHTS.md`** - This documentation

### Files Modified

All HTML pages have been updated to include the visitor tracking script:
- index.html
- about.html
- contact.html
- how-to-plan.html
- more-info.html
- privacy.html
- scenarios.html
- tutorials.html

### Tracking Script API

The tracking script exposes a global API:

```javascript
// Get visitor statistics
const stats = window.FinancePlannerTracking.getStats();

// Get visit history
const history = window.FinancePlannerTracking.getHistory();

// Export all data
const data = window.FinancePlannerTracking.exportData();

// Get visitor ID
const id = window.FinancePlannerTracking.getVisitorId();
```

### Debug Mode

To see tracking data in the browser console, add `?debug=true` to any page URL:

```
https://financeplannerapp.com/index.html?debug=true
```

## Frequently Asked Questions

### Q: Can I see unique users across all visitors?

**A:** With local browser tracking alone, no. Each browser has its own isolated data. To see aggregate data across all visitors, you need to set up Google Analytics 4.

### Q: Is this GDPR compliant?

**A:** The local browser tracking is GDPR compliant as data stays on the user's device. For Google Analytics, ensure you:
- Mention it in your Privacy Policy
- Consider implementing a cookie consent banner
- Configure GA4 with data retention settings appropriate for your region

### Q: Will tracking slow down my website?

**A:** No. The tracking script is lightweight and runs asynchronously. It adds negligible overhead to page load times.

### Q: Can users opt-out of tracking?

**A:** For local tracking, users can clear their browser's localStorage. For Google Analytics, users can:
- Use browser extensions like uBlock Origin
- Enable "Do Not Track" in their browser
- You can implement a cookie consent banner with opt-out functionality

### Q: How long is data retained?

**A:** 
- Local tracking: Until the user clears their browser data
- Google Analytics: Configurable (default is 14 months, can be set to 2-14 months)

## Support

For questions or issues with the user insights feature:
- Open an issue on GitHub: [https://github.com/juuul/FinancePlanner/issues](https://github.com/juuul/FinancePlanner/issues)
- Join the community discussions: [https://github.com/juuul/FinancePlanner/discussions](https://github.com/juuul/FinancePlanner/discussions)

## Future Enhancements

Potential improvements to consider:

1. **Server-side Analytics**: Implement a simple server-side solution for aggregated anonymous statistics
2. **Custom Events**: Track specific user actions (button clicks, form submissions)
3. **Conversion Tracking**: Track app downloads and other goals
4. **A/B Testing**: Test different page variations
5. **Heatmaps**: Visualize where users click on pages
