"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  LayoutDashboard,
  Target,
  TrendingUp,
  Users,
  GraduationCap,
  Trophy,
  Search,
  Bell,
  Settings,
  ChevronRight,
  Briefcase,
  DollarSign,
  MessageSquare,
  Award,
  CheckCircle2,
  Clock,
  BookOpen,
  BarChart3,
  Shield,
  ArrowUpRight,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"

export function SalesRadarDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")

  const renderContent = () => {
    switch (activeTab) {
      case "opportunities":
        return <OpportunitiesView />
      case "analytics":
        return <AnalyticsView />
      case "leaderboard":
        return <LeaderboardView />
      case "training":
        return <TrainingView />
      case "network":
        return <NetworkView />
      case "messages":
        return <MessagesView />
      default:
        return <DashboardView />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center justify-between px-8 py-5">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg shadow-primary/20">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground tracking-tight">Sales Radar</h1>
              <p className="text-[11px] text-muted-foreground font-medium tracking-wide uppercase">by Fidel</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-[18px] w-[18px]" />
              <Input
                placeholder="Search opportunities, sellers..."
                className="pl-11 w-96 h-11 bg-muted/40 border-border/60 rounded-xl focus:bg-background transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button size="icon" variant="ghost" className="h-11 w-11 rounded-xl" onClick={() => alert("Notifications")}>
              <Bell className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-11 w-11 rounded-xl" onClick={() => alert("Settings")}>
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar className="h-10 w-10 border-2 border-border/60">
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-72 border-r border-border/40 bg-card/30 h-[calc(100vh-81px)] sticky top-[81px] backdrop-blur-sm">
          <nav className="p-6 space-y-1.5">
            {[
              { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
              { icon: Target, label: "Opportunities", id: "opportunities", badge: "12" },
              { icon: BarChart3, label: "Analytics", id: "analytics" },
              { icon: Trophy, label: "Leaderboard", id: "leaderboard" },
              { icon: GraduationCap, label: "Training", id: "training" },
              { icon: Users, label: "Network", id: "network" },
              { icon: MessageSquare, label: "Messages", id: "messages", badge: "3" },
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={`w-full justify-start h-11 rounded-xl font-medium transition-all ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "hover:bg-muted/60"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="mr-3 h-[18px] w-[18px]" />
                <span>{item.label}</span>
                {item.badge && (
                  <Badge className="ml-auto bg-accent/20 text-accent-foreground border-0 px-2 py-0 h-5 text-xs font-semibold">
                    {item.badge}
                  </Badge>
                )}
              </Button>
            ))}
          </nav>

          <div className="p-6 mt-auto absolute bottom-6 left-0 right-0">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10 p-5 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1.5 text-balance">Get Fidel Certified</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Complete training to unlock premium opportunities
                  </p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-9 rounded-lg font-medium shadow-md shadow-primary/20"
                  onClick={() => setActiveTab("training")}
                >
                  Start Course
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </aside>

        <main className="flex-1 p-8">{renderContent()}</main>
      </div>
    </div>
  )
}

function DashboardView() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">Welcome back, John</h2>
        <p className="text-base text-muted-foreground">Track your performance and discover new opportunities</p>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <Card className="p-7 border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <div className="flex items-center space-x-1 text-accent">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">+18%</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Total Earnings</p>
              <p className="text-3xl font-bold text-foreground tracking-tight">$47,284</p>
            </div>
          </div>
        </Card>

        <Card className="p-7 border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <Badge className="bg-primary/10 text-primary border-0 font-semibold px-2.5 py-1">Active</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Active Deals</p>
              <p className="text-3xl font-bold text-foreground tracking-tight">8</p>
            </div>
          </div>
        </Card>

        <Card className="p-7 border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-chart-3/10 rounded-2xl flex items-center justify-center">
                <Target className="h-6 w-6 text-chart-3" />
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">54/79 closed</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Success Rate</p>
              <p className="text-3xl font-bold text-foreground tracking-tight">68%</p>
            </div>
          </div>
        </Card>

        <Card className="p-7 border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-chart-4/10 rounded-2xl flex items-center justify-center">
                <Trophy className="h-6 w-6 text-chart-4" />
              </div>
              <Star className="h-5 w-5 text-chart-3 fill-chart-3" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Ranking</p>
              <p className="text-3xl font-bold text-foreground tracking-tight">#12</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Opportunities Feed */}
        <Card className="col-span-2 p-8 border-border/60 shadow-sm">
          <div className="flex items-center justify-between mb-7">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Live Opportunities</h3>
              <p className="text-sm text-muted-foreground">Verified positions from top offer owners</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="h-9 rounded-lg border-border/60 hover:bg-muted/60 bg-transparent"
            >
              View All
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Senior Closer - Webinar Funnel",
                company: "High Ticket Coaching",
                pay: "$5k-$8k/mo",
                commission: "10% commission",
                type: "Full-time",
                verified: true,
                tags: ["High Ticket", "Coaching"],
                posted: "2h ago",
                applicants: 8,
                hot: true,
              },
              {
                title: "DM Setter - E-commerce Brand",
                company: "Fashion Empire Inc",
                pay: "$3k-$5k/mo",
                commission: "bonuses",
                type: "Part-time",
                verified: true,
                tags: ["E-commerce", "DM"],
                posted: "5h ago",
                applicants: 15,
                hot: false,
              },
              {
                title: "Sales Manager - SaaS Product",
                company: "TechFlow Solutions",
                pay: "$8k-$12k/mo",
                commission: "equity",
                type: "Full-time",
                verified: true,
                tags: ["SaaS", "Leadership"],
                posted: "1d ago",
                applicants: 23,
                hot: false,
              },
            ].map((job, index) => (
              <Card
                key={index}
                className="p-5 border-border/60 hover:border-primary/40 hover:shadow-md transition-all bg-gradient-to-br from-card to-muted/20"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground text-base">{job.title}</h4>
                        {job.verified && <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />}
                        {job.hot && (
                          <Badge className="bg-destructive/10 text-destructive border-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                            <Zap className="h-3 w-3 mr-1" />
                            Hot
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <Badge variant="secondary" className="bg-muted/60 text-foreground border-0 font-medium">
                      {job.type}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-3 text-sm">
                    <span className="font-semibold text-foreground">{job.pay}</span>
                    <span className="text-muted-foreground">+</span>
                    <span className="text-accent font-medium">{job.commission}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/60">
                    <div className="flex items-center space-x-3">
                      {job.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-border/60 font-medium">
                          {tag}
                        </Badge>
                      ))}
                      <div className="flex items-center space-x-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 px-4 rounded-lg shadow-sm"
                      onClick={() => alert(`Applying to: ${job.title}`)}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          {/* Profile Strength */}
          <Card className="p-6 border-border/60 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-5">Profile Strength</h3>
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground font-medium">Overall Completion</span>
                  <span className="text-2xl font-bold text-foreground">78%</span>
                </div>
                <Progress value={78} className="h-2.5 bg-muted/60" />
              </div>
              <div className="space-y-3 pt-3 border-t border-border/60">
                {[
                  { label: "Complete Fidel Course", done: false, points: "+15%" },
                  { label: "Add video introduction", done: false, points: "+10%" },
                  { label: "Get 3 recommendations", done: true, points: "✓" },
                  { label: "Verify phone number", done: true, points: "✓" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2.5">
                      {item.done ? (
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border-2 border-border flex-shrink-0" />
                      )}
                      <span
                        className={item.done ? "text-muted-foreground line-through" : "text-foreground font-medium"}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span className="text-primary font-semibold text-xs">{item.points}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Leaderboard Preview */}
          <Card className="p-6 border-border/60 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-foreground">Top Performers</h3>
              <Trophy className="h-5 w-5 text-chart-3" />
            </div>
            <div className="space-y-3">
              {[
                { name: "Alex Martinez", earnings: "$89.2K", rank: 1, avatar: "AM" },
                { name: "Sarah Chen", earnings: "$76.8K", rank: 2, avatar: "SC" },
                { name: "Marcus Johnson", earnings: "$68.4K", rank: 3, avatar: "MJ" },
                { name: "You", earnings: "$47.2K", rank: 12, avatar: "JD", highlight: true },
              ].map((user, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-3.5 rounded-xl transition-all ${
                    user.highlight
                      ? "bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                      : "bg-muted/30 hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center font-bold text-xs border border-border/60">
                      #{user.rank}
                    </div>
                    <Avatar className="h-9 w-9 border-2 border-border/60">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-xs font-semibold">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{user.name}</p>
                      <p className="text-xs text-muted-foreground font-medium">{user.earnings}</p>
                    </div>
                  </div>
                  {user.rank <= 3 && <Star className="h-4 w-4 text-chart-3 fill-chart-3" />}
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 border-border/60 hover:bg-muted/60 h-9 rounded-lg bg-transparent"
              size="sm"
              onClick={() => alert("View Full Leaderboard")}
            >
              View Full Leaderboard
            </Button>
          </Card>

          {/* Training Progress */}
          <Card className="p-6 border-border/60 shadow-sm bg-gradient-to-br from-card to-primary/5">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-foreground">Training</h3>
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground font-semibold">Fidel Sales Framework</span>
                  <span className="text-muted-foreground font-medium">6/10</span>
                </div>
                <Progress value={60} className="h-2.5 bg-muted/60" />
              </div>
              <div className="space-y-3 pt-3 border-t border-border/60">
                <p className="text-sm text-muted-foreground font-medium">Next: Cold Calling Mastery</p>
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-9 rounded-lg shadow-md shadow-primary/20"
                  onClick={() => alert("Continue Learning")}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Continue Learning
                </Button>
              </div>
              <div className="pt-3 border-t border-border/60">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Certificates earned</span>
                  <div className="flex items-center space-x-1.5">
                    <Award className="h-4 w-4 text-chart-3" />
                    <span className="font-bold text-foreground">2</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function OpportunitiesView() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-foreground tracking-tight">All Opportunities</h2>
        <p className="text-base text-muted-foreground">Browse all available positions</p>
      </div>
      <Card className="p-16 text-center border-border/60 shadow-sm">
        <Target className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Opportunities Feed</h3>
        <p className="text-muted-foreground">Full opportunities listing will be displayed here</p>
      </Card>
    </div>
  )
}

function AnalyticsView() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-foreground tracking-tight">Analytics Dashboard</h2>
        <p className="text-base text-muted-foreground">Deep dive into your performance metrics</p>
      </div>
      <Card className="p-16 text-center border-border/60 shadow-sm">
        <BarChart3 className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Detailed Analytics</h3>
        <p className="text-muted-foreground">Charts and insights will be displayed here</p>
      </Card>
    </div>
  )
}

function LeaderboardView() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-foreground tracking-tight">Leaderboard</h2>
        <p className="text-base text-muted-foreground">See how you rank among top performers</p>
      </div>
      <Card className="p-16 text-center border-border/60 shadow-sm">
        <Trophy className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Rankings</h3>
        <p className="text-muted-foreground">Full leaderboard will be displayed here</p>
      </Card>
    </div>
  )
}

function TrainingView() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-foreground tracking-tight">Training Center</h2>
        <p className="text-base text-muted-foreground">Complete courses to get Fidel certified</p>
      </div>
      <Card className="p-16 text-center border-border/60 shadow-sm">
        <GraduationCap className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Course Catalog</h3>
        <p className="text-muted-foreground">Training modules and certifications will be displayed here</p>
      </Card>
    </div>
  )
}

function NetworkView() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-foreground tracking-tight">Network</h2>
        <p className="text-base text-muted-foreground">Connect with other sales professionals</p>
      </div>
      <Card className="p-16 text-center border-border/60 shadow-sm">
        <Users className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Your Network</h3>
        <p className="text-muted-foreground">Connections and networking features will be displayed here</p>
      </Card>
    </div>
  )
}

function MessagesView() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-foreground tracking-tight">Messages</h2>
        <p className="text-base text-muted-foreground">Communicate with offer owners and sellers</p>
      </div>
      <Card className="p-16 text-center border-border/60 shadow-sm">
        <MessageSquare className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Inbox</h3>
        <p className="text-muted-foreground">Message threads will be displayed here</p>
      </Card>
    </div>
  )
}
