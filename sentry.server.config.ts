import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://24717a9ef0b86ce4f1a3600fe24ce005@o4509708094603264.ingest.us.sentry.io/4509708097814528",

    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
    sendDefaultPii: true,

    // ...

    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
});
