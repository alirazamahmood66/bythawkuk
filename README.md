# BYTHAWK UK — Digital Technology Agency Platform

> Production-quality full-stack MERN architecture for BYTHAWK (`bythawk.uk`), engineered with an interactive 3D solar system digital experience.

---

## Architecture Overview

```
bythawkuk/
├── client/                     # Frontend Application (React 19 + Vite 8 + TypeScript)
│   ├── src/
│   │   ├── 3d/                 # Three.js / React Three Fiber planetary engine
│   │   │   ├── canvas/         # Canvas wrappers & WebGL render targets
│   │   │   ├── components/     # 3D meshes, orbits, planet shaders
│   │   │   ├── config/         # Solar system planetary configuration models
│   │   │   └── scenes/         # Scene compositions
│   │   ├── assets/             # Static graphics & vectors
│   │   ├── components/         # Reusable design system UI components
│   │   │   └── ui/             # Buttons, Cards, Badges, StatusIndicators, Containers
│   │   ├── hooks/              # Custom React hooks (useApiHealth, useWindowSize, etc.)
│   │   ├── layouts/            # Reusable page layouts (RootLayout, Navbar, Footer)
│   │   ├── pages/              # Routed pages (HomePage, NotFoundPage)
│   │   ├── sections/           # Modular future page sections
│   │   ├── services/           # API services & HTTP client
│   │   ├── types/              # Domain & API TypeScript interfaces
│   │   ├── App.tsx             # Route orchestration
│   │   ├── main.tsx            # React DOM mounting
│   │   └── index.css           # Tailwind CSS v4 styling
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── server/                     # Backend API Application (Node.js + Express + TypeScript)
│   ├── src/
│   │   ├── config/             # Centralized environment & database config
│   │   ├── controllers/        # Request handlers (HealthController, etc.)
│   │   ├── middleware/         # Error handling, request logging, security
│   │   ├── models/             # Mongoose schemas (Service, etc.)
│   │   ├── routes/             # Express API routing (healthRoutes, central router)
│   │   ├── services/           # Domain business logic (HealthService, etc.)
│   │   ├── types/              # API contract & payload types
│   │   ├── utils/              # Logger, ApiResponse helpers, AppError
│   │   ├── app.ts              # Express application factory
│   │   └── server.ts           # HTTP server bootstrapping & graceful shutdown
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── package.json                # Root orchestration & concurrent development scripts
└── .gitignore
```

---

## Quick Start

### 1. Install Dependencies
```bash
# From workspace root:
npm run install:all
```

### 2. Development Mode
Run both client and server concurrently:
```bash
npm run dev
```

Or run individually:
```bash
# Terminal 1 - Backend Server (Port 5000)
npm run dev:server

# Terminal 2 - Frontend Client (Port 5173)
npm run dev:client
```

---

## Endpoints

- **Frontend Client**: `http://localhost:5173`
- **Backend Server**: `http://localhost:5000`
- **Health Check Endpoint**: `http://localhost:5000/api/health`

### Health Check Response Example
```json
{
  "success": true,
  "message": "BYTHAWK API is operational and ready",
  "data": {
    "status": "ok",
    "service": "BYTHAWK Digital Agency API",
    "version": "1.0.0",
    "environment": "development",
    "uptime": 12.45,
    "timestamp": "2026-10-09T03:19:00.000Z",
    "database": {
      "status": "disconnected",
      "message": "MongoDB not currently connected"
    }
  },
  "timestamp": "2026-10-09T03:19:00.000Z"
}
```
