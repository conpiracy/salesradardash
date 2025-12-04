# Sales Radar Dashboard Component

## Overview

The Sales Radar Dashboard is a premium, production-ready React component built for the Fidel/Sales Radar platform - a B2B marketplace connecting sales professionals with offer owners on Whop. This component provides a complete dashboard interface for managing sales opportunities, tracking performance, viewing leaderboards, and accessing training.

## Features

- **Multi-Tab Navigation**: Dashboard, Opportunities, Analytics, Leaderboard, Training, Network, Messages
- **Live Opportunities Feed**: Real-time job listings with filters by type, budget, and commission structure
- **Performance Analytics**: Earnings tracking, conversion rates, response times, and deal metrics
- **Leaderboard System**: Rankings with earnings, deals closed, and success rates
- **Training & Certification**: Fidel certification progress tracking with course modules
- **Profile Management**: Profile strength indicators and completion tracking
- **Responsive Design**: Mobile-first with desktop enhancements
- **Premium UI**: Frosted glass effects, refined typography, sophisticated color palette

## Installation

The component is already included in your codebase at `components/ui/sales-radar-dashboard.tsx`.

### Dependencies

\`\`\`json
{
  "react": "^19",
  "lucide-react": "latest",
  "tailwindcss": "^3.4",
  "@radix-ui/react-avatar": "latest",
  "@radix-ui/react-progress": "latest"
}
\`\`\`

All shadcn/ui components used:
- Avatar
- Badge
- Button
- Card
- Input
- Progress
- Tabs

## Usage

### Basic Implementation

\`\`\`tsx
import { SalesRadarDashboard } from "@/components/ui/sales-radar-dashboard"

export default function Page() {
  return <SalesRadarDashboard />
}
\`\`\`

### With Custom Props

\`\`\`tsx
import { SalesRadarDashboard } from "@/components/ui/sales-radar-dashboard"

export default function Page() {
  return (
    <SalesRadarDashboard
      className="custom-class"
      user={{
        name: "Jordan Smith",
        email: "jordan@example.com",
        avatar: "/avatars/jordan.jpg",
        role: "Elite Closer"
      }}
      stats={{
        earnings: 47250,
        dealsActive: 8,
        successRate: 94,
        ranking: 12
      }}
    />
  )
}
\`\`\`

## Component Structure

### Main Layout
\`\`\`
SalesRadarDashboard
├── Sidebar Navigation (fixed left, 256px width)
│   ├── Logo & Branding
│   ├── Search Bar
│   ├── Navigation Items (7 tabs)
│   └── User Profile Section
└── Main Content Area (flex-1)
    ├── Header (greeting + actions)
    └── Tab Content (conditional rendering)
        ├── Dashboard View
        ├── Opportunities View
        ├── Analytics View
        ├── Leaderboard View
        ├── Training View
        ├── Network View
        └── Messages View
\`\`\`

### TypeScript Interfaces

\`\`\`typescript
interface User {
  name: string
  email: string
  avatar?: string
  role?: string
}

interface Stats {
  earnings: number
  dealsActive: number
  successRate: number
  ranking: number
}

interface SalesRadarDashboardProps {
  className?: string
  user?: User
  stats?: Stats
}
\`\`\`

## Design System

### Color Palette

The component uses a sophisticated blue-gray and emerald green palette defined in `globals.css`:

\`\`\`css
--background: 220 26% 14%           /* Dark blue-gray base */
--foreground: 210 40% 98%           /* Crisp white text */
--primary: 210 100% 56%             /* Vibrant blue accent */
--secondary: 217 32% 17%            /* Darker blue-gray */
--accent: 158 64% 52%               /* Emerald green for positive actions */
--muted: 215 20% 25%                /* Muted blue-gray */
--border: 215 15% 28%               /* Subtle borders */
\`\`\`

### Typography

- **Font Family**: Inter (loaded via next/font/google)
- **Heading Sizes**: 3xl (30px), 2xl (24px), xl (20px)
- **Body Text**: Base (16px) with leading-relaxed (1.625)
- **Small Text**: sm (14px) for metadata and labels
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing System

- **Container Padding**: p-8 (32px)
- **Card Padding**: p-6 (24px)
- **Gap Between Elements**: gap-6 (24px) for major sections, gap-4 (16px) for related items
- **Sidebar Width**: 256px (w-64)
- **Generous Whitespace**: Minimum 24px between major UI sections

### Visual Effects

\`\`\`css
/* Frosted Glass Effect */
backdrop-blur-xl bg-background/95

/* Refined Shadows */
shadow-[0_8px_32px_rgba(0,0,0,0.12)]

/* Hover States */
hover:bg-accent/10 transition-colors

/* Focus States */
focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
\`\`\`

## Integration with Backend

### Data Fetching Example

\`\`\`tsx
import { SalesRadarDashboard } from "@/components/ui/sales-radar-dashboard"
import { getUser, getUserStats } from "@/lib/api"

export default async function DashboardPage() {
  const user = await getUser()
  const stats = await getUserStats(user.id)
  
  return (
    <SalesRadarDashboard 
      user={user}
      stats={stats}
    />
  )
}
\`\`\`

### API Integration Points

The component is designed to integrate with the following backend endpoints:

\`\`\`typescript
// User & Profile
GET /api/user/profile
PUT /api/user/profile
GET /api/user/stats

// Opportunities
GET /api/opportunities?filter=all|direct|affiliate&budget=all|<5k|5k-15k|15k+
POST /api/opportunities/:id/apply
GET /api/opportunities/:id

// Analytics
GET /api/analytics/earnings
GET /api/analytics/performance
GET /api/analytics/deals

// Leaderboard
GET /api/leaderboard?period=week|month|all

// Training
GET /api/training/courses
GET /api/training/progress
POST /api/training/courses/:id/enroll

// Network
GET /api/network/connections
GET /api/network/requests

// Messages
GET /api/messages
POST /api/messages
PUT /api/messages/:id/read
\`\`\`

### State Management Example

\`\`\`tsx
"use client"

import { SalesRadarDashboard } from "@/components/ui/sales-radar-dashboard"
import { useUser } from "@/hooks/use-user"
import { useStats } from "@/hooks/use-stats"

export default function DashboardPage() {
  const { user } = useUser()
  const { stats } = useStats(user?.id)
  
  if (!user) return <div>Loading...</div>
  
  return (
    <SalesRadarDashboard 
      user={user}
      stats={stats}
    />
  )
}
\`\`\`

## Customization

### Theming

Override CSS variables in your `globals.css`:

\`\`\`css
:root {
  --primary: 200 100% 50%;      /* Change primary blue */
  --accent: 160 70% 45%;        /* Change accent green */
  --radius: 0.75rem;            /* Adjust border radius */
}
\`\`\`

### Adding New Tabs

\`\`\`tsx
// Add to navigation items array
const navigationItems = [
  // ... existing items
  {
    id: "reports",
    label: "Reports",
    icon: FileText,
  }
]

// Add to content rendering
{activeTab === "reports" && (
  <div>
    {/* Your reports content */}
  </div>
)}
\`\`\`

### Custom Styling

\`\`\`tsx
<SalesRadarDashboard 
  className="custom-dashboard"
  // Add custom Tailwind classes
/>
\`\`\`

## Performance Optimization

### Code Splitting

\`\`\`tsx
import dynamic from 'next/dynamic'

const SalesRadarDashboard = dynamic(
  () => import('@/components/ui/sales-radar-dashboard'),
  { ssr: false }
)
\`\`\`

### Memoization

\`\`\`tsx
import { memo } from 'react'

export const SalesRadarDashboard = memo(function SalesRadarDashboard(props) {
  // Component code
})
\`\`\`

## Accessibility

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus states with ring-2 ring-primary
- **Color Contrast**: WCAG AA compliant (4.5:1 minimum)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)

## File Structure

\`\`\`
components/ui/sales-radar-dashboard.tsx  (Main component - 1000+ lines)
app/globals.css                           (Design tokens & custom styles)
app/layout.tsx                            (Inter font configuration)
app/page.tsx                              (Usage example)
\`\`\`

## Context for LLMs/AI Agents

### Component Purpose
This is a **feature-complete dashboard UI** for a B2B sales platform. It's designed to be dropped into an existing codebase and connected to backend APIs.

### Key Patterns Used
- **Tab-based navigation** with conditional content rendering
- **Mock data** for demonstration (replace with real API calls)
- **shadcn/ui components** for consistency
- **Tailwind CSS** for styling with custom design tokens
- **Client-side state** with useState for tab switching and search

### Integration Requirements
1. Replace mock data with API calls
2. Add authentication wrapper (check user session)
3. Implement real-time updates (WebSocket/polling for opportunities)
4. Add error handling and loading states
5. Connect form submissions to backend endpoints

### Common Modifications
- **Add new tabs**: Update navigationItems array + add conditional rendering
- **Change colors**: Modify CSS variables in globals.css
- **Add features**: New components in tab content sections
- **API integration**: Replace mock data with fetch/SWR calls

### Design Philosophy
- **Premium aesthetic** over generic SaaS look
- **Generous spacing** for breathing room (24px minimum gaps)
- **Frosted glass** and blur effects for depth
- **Refined shadows** instead of hard borders
- **Clear hierarchy** through typography and spacing

## Support & Contributing

For issues, questions, or contributions related to this component, refer to the main repository documentation or contact the development team.

## License

This component is part of the Sales Radar platform codebase.
