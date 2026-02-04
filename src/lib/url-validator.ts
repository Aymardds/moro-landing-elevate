/**
 * URL validation utilities for security
 */

/**
 * List of allowed domains for external links
 */
const ALLOWED_DOMAINS = [
    'apps.apple.com',
    'play.google.com',
    'moro-apps.net',
    'www.moro-apps.net',
] as const;

/**
 * Validates if a URL is from an allowed domain
 * @param url - The URL to validate
 * @returns true if URL is from an allowed domain, false otherwise
 */
export function isAllowedUrl(url: string): boolean {
    try {
        const urlObj = new URL(url);

        // Check protocol - only allow https and http
        if (!['https:', 'http:'].includes(urlObj.protocol)) {
            return false;
        }

        // Check if hostname matches allowed domains
        return ALLOWED_DOMAINS.some(domain =>
            urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
        );
    } catch {
        return false;
    }
}

/**
 * Safely opens a URL in a new tab with security measures
 * @param url - The URL to open
 * @returns true if URL was opened, false if blocked
 */
export function safeOpenUrl(url: string): boolean {
    if (!isAllowedUrl(url)) {
        console.warn('[Security] Blocked untrusted URL:', url);
        return false;
    }

    // Open with noopener and noreferrer for security
    window.open(url, '_blank', 'noopener,noreferrer');
    return true;
}

/**
 * Validates if a URL is safe for navigation
 * @param url - The URL to validate
 * @returns true if safe, false otherwise
 */
export function isSafeNavigationUrl(url: string): boolean {
    // Block javascript: and data: protocols
    const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
    const lowerUrl = url.toLowerCase().trim();

    return !dangerousProtocols.some(protocol => lowerUrl.startsWith(protocol));
}
