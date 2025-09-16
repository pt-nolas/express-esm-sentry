# Express Hello World API

A simple Express backend with TypeScript that provides a "hello world" API endpoint.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
```bash
npm install
```

### Development
Run in development mode with auto-reload:
```bash
npm run dev
```

### Production
Build and run:
```bash
npm run build
npm start
```

## API Endpoints

- `GET /api/hello` - Returns a "hello world" message
- `GET /health` - Health check endpoint

### Example Response
```json
{
  "message": "hello world"
}
```

## Project Structure
```
├── src/
│   └── server.ts          # Main server file
├── dist/                  # Compiled JavaScript (after build)
├── package.json
├── tsconfig.json
└── README.md
```

The server runs on `http://localhost:3000` by default.

