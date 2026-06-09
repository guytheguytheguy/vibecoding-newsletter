import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Folded into the Vibe Coding Academy umbrella (2026-06-09): the newsletter
  // now lives at vibe-coding.academy/newsletter against the same Buttondown
  // `endofcoding` audience. This domain stays live as a 301 redirect-in funnel
  // so existing inbound links (emails, archive links) keep resolving.
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.vibe-coding.academy/newsletter",
        permanent: true,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  widenClientFileUpload: true,

  tunnelRoute: "/monitoring",

  hideSourceMaps: true,

  webpack: {
    reactComponentAnnotation: {
      enabled: true,
    },
    treeshake: {
      removeDebugLogging: true,
    },
    automaticVercelMonitors: true,
  },
});
