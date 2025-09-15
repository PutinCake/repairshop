import * as Sentry from "@sentry/nextjs";

export function register() {
    Sentry.init({
        // 将 "YOUR_SENTRY_DSN_HERE" 替换为你的 Sentry DSN
        dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || "YOUR_SENTRY_DSN_HERE",

        // 在生产环境中调整此值，或使用 tracesSampler 进行更精细的控制
        tracesSampleRate: 1.0,

        // 将此选项设置为 true 将在你设置 Sentry 时在控制台中打印有用的信息。
        debug: false,

        // 你还可以添加采样行为来控制发送到 Sentry 的数据量
        // profilesSampleRate: 1.0,
    });
}
