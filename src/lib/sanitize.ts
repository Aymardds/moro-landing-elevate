/**
 * Security utilities for input sanitization
 */

/**
 * Escapes HTML special characters to prevent XSS attacks
 * @param text - The text to sanitize
 * @returns Sanitized text safe for HTML display
 */
export function sanitizeHtml(text: string): string {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
    };

    return text.replace(/[&<>"'/]/g, (char) => map[char] || char);
}

/**
 * Sanitizes user input by trimming and limiting length
 * @param input - The input to sanitize
 * @param maxLength - Maximum allowed length (default: 500)
 * @returns Sanitized input
 */
export function sanitizeInput(input: string, maxLength: number = 500): string {
    return input.trim().slice(0, maxLength);
}

/**
 * Validates if a string is a valid URL
 * @param url - The URL to validate
 * @returns true if valid URL, false otherwise
 */
export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * Validates CSS color values to prevent injection
 * @param color - The color value to validate
 * @returns true if valid color, false otherwise
 */
export function isValidColor(color: string): boolean {
    // Allow hex colors, rgb/rgba, hsl/hsla, and named colors
    const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbPattern = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/;
    const hslPattern = /^hsla?\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(,\s*[\d.]+\s*)?\)$/;

    return hexPattern.test(color) || rgbPattern.test(color) || hslPattern.test(color);
}
