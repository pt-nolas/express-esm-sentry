import "../instrument.mjs";
import express, { Request, Response } from 'express';
import * as Sentry from "@sentry/node";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Hello World API endpoint
app.get('/api/hello', (req: Request, res: Response) => {
  Sentry.logger.info('Hello World API endpoint called');
  res.json({ message: 'hello world' });
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  Sentry.logger.info('Health check endpoint called');
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Hello World API available at http://localhost:${PORT}/api/hello`);
});

export default app;
