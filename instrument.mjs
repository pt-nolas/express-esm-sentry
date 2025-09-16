import * as Sentry from "@sentry/node";
import dotenv from 'dotenv';
dotenv.config();
// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
  enableLogs: true,
  debug: true
});