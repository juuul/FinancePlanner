/**
 * Visitor Tracking System
 * Tracks unique visitors using localStorage (client-side only, no data sent to servers)
 */

(function() {
    'use strict';

    const VISITOR_KEY = 'fp_visitor_id';
    const VISIT_HISTORY_KEY = 'fp_visit_history';
    const TRACKING_VERSION = '1.0.0';

    /**
     * Generate a unique visitor ID
     */
    function generateVisitorId() {
        return 'fp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
    }

    /**
     * Get or create visitor ID
     */
    function getVisitorId() {
        let visitorId = localStorage.getItem(VISITOR_KEY);
        if (!visitorId) {
            visitorId = generateVisitorId();
            localStorage.setItem(VISITOR_KEY, visitorId);
        }
        return visitorId;
    }

    /**
     * Get visitor history
     */
    function getVisitHistory() {
        try {
            const history = localStorage.getItem(VISIT_HISTORY_KEY);
            return history ? JSON.parse(history) : [];
        } catch (e) {
            return [];
        }
    }

    /**
     * Add visit to history
     */
    function addVisit(page) {
        const history = getVisitHistory();
        const visit = {
            page: page,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            language: navigator.language,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            referrer: document.referrer || 'direct'
        };
        
        history.push(visit);
        
        // Keep only last 100 visits to avoid localStorage bloat
        if (history.length > 100) {
            history.shift();
        }
        
        try {
            localStorage.setItem(VISIT_HISTORY_KEY, JSON.stringify(history));
        } catch (e) {
            // Storage full, remove oldest entries
            history.splice(0, 50);
            try {
                localStorage.setItem(VISIT_HISTORY_KEY, JSON.stringify(history));
            } catch (e2) {
                console.warn('Unable to store visit history');
            }
        }
    }

    /**
     * Get visitor statistics
     */
    function getVisitorStats() {
        const visitorId = getVisitorId();
        const history = getVisitHistory();
        
        const firstVisit = history.length > 0 ? history[0].timestamp : new Date().toISOString();
        const lastVisit = history.length > 0 ? history[history.length - 1].timestamp : new Date().toISOString();
        
        // Count page visits
        const pageVisits = {};
        history.forEach(visit => {
            pageVisits[visit.page] = (pageVisits[visit.page] || 0) + 1;
        });
        
        return {
            visitorId: visitorId,
            totalVisits: history.length,
            firstVisit: firstVisit,
            lastVisit: lastVisit,
            pageVisits: pageVisits,
            currentPage: window.location.pathname,
            trackingVersion: TRACKING_VERSION
        };
    }

    /**
     * Track current page visit
     */
    function trackPageVisit() {
        const page = window.location.pathname;
        addVisit(page);
        
        // Console log for debugging (can be removed in production)
        if (window.location.search.includes('debug=true')) {
            console.log('Visitor Tracking:', getVisitorStats());
        }
    }

    /**
     * Export visitor data for admin view
     */
    function exportVisitorData() {
        return {
            stats: getVisitorStats(),
            fullHistory: getVisitHistory()
        };
    }

    // Initialize tracking on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trackPageVisit);
    } else {
        trackPageVisit();
    }

    // Expose API for admin page
    window.FinancePlannerTracking = {
        getStats: getVisitorStats,
        getHistory: getVisitHistory,
        exportData: exportVisitorData,
        getVisitorId: getVisitorId
    };

})();
