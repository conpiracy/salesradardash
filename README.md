# Frosted Glass UI - CRM Dashboard UI Design

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/conpiracys-projects/v0-frosted-glass-ui-crm-dashboar)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/jlnq3ELcS7T)

## Overview

This repository contains the **Sales Radar Dashboard** - a premium, production-ready UI for the Fidel/Sales Radar B2B platform connecting sales professionals with offer owners.

This repository stays in sync with your deployed chats on [v0.app](https://v0.app). Any changes you make to your deployed app will be automatically pushed to this repository.

## Quick Start

\`\`\`bash
# Clone the repository
git clone https://github.com/conpiracy/salesradardash.git
cd salesradardash

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Visit `http://localhost:3000` to see the dashboard.

## Features

✨ Multi-tab navigation (Dashboard, Opportunities, Analytics, Leaderboard, Training, Network, Messages)  
📊 Real-time performance tracking and analytics  
🏆 Interactive leaderboard system  
🎓 Training & certification progress  
💼 Live opportunities feed with advanced filters  
🎨 Premium frosted glass UI with refined design system  
📱 Fully responsive mobile-first design  
⚡ Built with Next.js 15, React 19, and Tailwind CSS  

## Documentation

- **[Complete Component Documentation](./docs/SALES_RADAR_DASHBOARD.md)** - Full technical reference for developers and AI agents
- **[Integration Guide](./INTEGRATION_GUIDE.md)** - Backend integration patterns

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Type Safety**: TypeScript

## Project Structure

\`\`\`
salesradardash/
├── app/
│   ├── globals.css          # Design system & theme
│   ├── layout.tsx           # Root layout with Inter font
│   └── page.tsx             # Dashboard page
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   └── sales-radar-dashboard.tsx  # Main dashboard component
│   └── theme-provider.tsx
├── docs/
│   └── SALES_RADAR_DASHBOARD.md  # Complete technical docs
└── INTEGRATION_GUIDE.md     # Backend integration guide
\`\`\`

## Component Usage

\`\`\`tsx
import { SalesRadarDashboard } from "@/components/ui/sales-radar-dashboard"

export default function Page() {
  return <SalesRadarDashboard />
}
\`\`\`

See [full documentation](./docs/SALES_RADAR_DASHBOARD.md) for advanced usage and customization.

## Deployment

Your project is live at:

**[https://vercel.com/conpiracys-projects/v0-frosted-glass-ui-crm-dashboar](https://vercel.com/conpiracys-projects/v0-frosted-glass-ui-crm-dashboar)**

Deploy your own:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/conpiracy/salesradardash)

## Build your app

Continue building your app on:

**[https://v0.app/chat/jlnq3ELcS7T](https://v0.app/chat/jlnq3ELcS7T)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Design System

The dashboard uses a sophisticated blue-gray and emerald green color palette with:
- Frosted glass effects and backdrop blur
- Refined typography using Inter
- Generous spacing (24px minimum gaps)
- Premium shadows and subtle borders
- Clear visual hierarchy

See [design documentation](./docs/SALES_RADAR_DASHBOARD.md#design-system) for complete details.

## License

Part of the Sales Radar platform codebase.
