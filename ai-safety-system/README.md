# AI Safety System — Frontend Dashboard

This folder contains a minimal React + Vite dashboard scaffold for an AI-powered safety monitoring system.

Quick start:

1. cd frontend
2. npm install
3. npm run dev

Design notes: Dark theme, Space Grotesk (headings), Inter (body), JetBrains Mono (mono).

Files of interest:
- frontend/src/components — UI components (VideoFeed, SensorPanel, AlertPanel, StatusBadge, Navbar)
- frontend/src/hooks — `useSensors`, `useAlerts`, `useStream` (mocked)
- frontend/src/services — `config`, `cloud`, `api` placeholders

Future work: integrate RTSP → WebRTC, add AI inference, connect to cloud.
