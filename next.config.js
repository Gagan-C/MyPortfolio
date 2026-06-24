/** @type {import('next').NextConfig} */

// Content-Security-Policy tuned to this site's origins:
// - Fonts (Geist) are self-hosted via next/font -> 'self' covers them.
// - Images are served from the Vercel Blob host and the Oracle workforce host.
// - Analytics (Vercel Analytics, Vercel Speed Insights, Google Analytics) are
//   gated behind the consent banner and load from their respective origins.
// - MUI/Emotion injects inline styles, and the layout ships inline JSON-LD +
//   GA bootstrap scripts, so 'unsafe-inline' is required for script/style until
//   a nonce-based CSP via middleware is introduced.
const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live https://*.vercel-scripts.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com https://brm-workforce.oracle.com https://www.google-analytics.com https://*.google-analytics.com",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://vercel.live https://*.vercel-insights.com https://*.vercel-scripts.com https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
].join("; ");

const nextConfig = {
    output: "standalone",
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
                    { key: "Content-Security-Policy", value: csp },
                    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
                ],
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'e21qb2sohxwlyxkx.public.blob.vercel-storage.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'brm-workforce.oracle.com',
                pathname: '/**'
            }
        ],
    },
};

export default nextConfig;