import * as Sentry from "@sentry/node";
import dotenv from 'dotenv';
dotenv.config();
// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "https://3cfb20aa79cd08560cea68d7df46a3f4@o4509915707604992.ingest.de.sentry.io/4510019134947408",
  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
  enableLogs: true,
  debug: true,
  integrations: [
    Sentry.httpIntegration({
      dropSpansForIncomingRequestStatusCodes: [], // disables dropping for all status codes
    }),
  ],
});