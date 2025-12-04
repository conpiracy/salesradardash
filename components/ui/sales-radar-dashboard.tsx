"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  LayoutDashboard,
  Briefcase,
  GraduationCap,
  Target,
  Trophy,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowRight,
  Award,
  ChevronRight,
  Search,
  Bell,
  ArrowUpRight,
  MoreHorizontal,
  Filter,
  Plus,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Contract {
  id: string
  title: string
  company: string
  compensation: {
    base: { min: number; max: number }
    commission: { min: number; max: number }
  }
  tags: {
    contractType: string
    trafficType: string
    offerType: string
  }
  location: string
  postedAt: string
  fidelCertifiedOnly: boolean
}

export function SalesRadarDashboard() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "opportunities" | "training" | "hpp" | "leaderboard" | "calendar"
  >("dashboard")
  const [currentWinIndex, setCurrentWinIndex] = useState(0)

  const topWins = [
    "8 Figure ARR deal closed, promoted to Strategic AE (largest deal in Company History)",
    "$25k/m, SDR Stacking President's Club, Corporate BDR",
    "$467k ARR deal closed, MM AE",
    "SMB→MM AE promotion, $275k OTE",
    "$20k/m, SDR Stacking",
    "$18k/m, SDR Stacking",
    "$16k/m, SDR Stacking",
    "141% attainment, SMB AE",
    "$15k/m, SDR Stacking",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWinIndex((prev) => (prev + 1) % topWins.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [topWins.length])

  const liveContracts: Contract[] = [
    {
      id: "1",
      title: "Senior Closer – SaaS Demo Calls",
      company: "CloudScale Inc",
      compensation: {
        base: { min: 4000, max: 7000 },
        commission: { min: 10, max: 15 },
      },
      tags: {
        contractType: "Closer",
        trafficType: "Inbound",
        offerType: "SaaS",
      },
      location: "Remote",
      postedAt: "2h ago",
      fidelCertifiedOnly: true,
    },
    {
      id: "2",
      title: "Fractional SDR – E-commerce Outreach",
      company: "GrowthCo",
      compensation: {
        base: { min: 3000, max: 5000 },
        commission: { min: 8, max: 12 },
      },
      tags: {
        contractType: "Fractional SDR",
        trafficType: "Outbound",
        offerType: "E-commerce",
      },
      location: "Remote",
      postedAt: "5h ago",
      fidelCertifiedOnly: false,
    },
    {
      id: "3",
      title: "DM Setter – High-Ticket Coaching",
      company: "Elite Coaching Co",
      compensation: {
        base: { min: 2000, max: 4000 },
        commission: { min: 15, max: 20 },
      },
      tags: {
        contractType: "DM Setter",
        trafficType: "Outbound",
        offerType: "Info Product",
      },
      location: "Remote",
      postedAt: "1d ago",
      fidelCertifiedOnly: false,
    },
  ]

  const marketReadiness = {
    score: 65,
    proofUploaded: true,
    recordingsAdded: false,
    certified: false,
  }

  const upcomingSessions = [
    { id: "1", date: "Thu 7 PM", title: "Live HPP Breakdown with Fidel" },
    { id: "2", date: "Sat 2 PM", title: "Mock Interviews" },
  ]

  const stats = {
    activeContracts: 3,
    hppActivity: 42,
    rank: 12,
    tier: "Operator",
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="max-w-[1400px] mx-auto space-y-8">
            {/* Stats Row - Elegant Cards */}
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: "Active Contracts", value: stats.activeContracts, icon: Briefcase },
                { label: "HPP Activity", value: stats.hppActivity, icon: Target },
                { label: "Rank", value: `#${stats.rank}`, sub: stats.tier, icon: Trophy },
                { label: "Market Score", value: `${marketReadiness.score}/100`, icon: Award },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-border/50 hover:shadow-[0_8px_30px_-4px_rgba(6,81,237,0.1)] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground font-medium tracking-wide">{stat.label}</span>
                    <div className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                      <stat.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</span>
                    {stat.sub && (
                      <span className="text-xs font-medium text-primary bg-primary/5 px-2 py-1 rounded-full border border-primary/10">
                        {stat.sub}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-8">
              {/* Main Column: Live Contracts */}
              <div className="col-span-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-foreground">Live Contracts</h2>
                    <p className="text-sm text-muted-foreground mt-1">High-value opportunities matching your profile</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8 gap-2 text-xs font-medium bg-transparent">
                      <Filter className="h-3.5 w-3.5" /> Filter
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 text-xs font-medium text-primary hover:text-primary/80 hover:bg-primary/5"
                    >
                      View All <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>

                <div className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden">
                  {liveContracts.map((contract, i) => (
                    <div
                      key={contract.id}
                      className={cn(
                        "group flex items-center justify-between p-5 hover:bg-secondary/30 transition-all duration-200 cursor-pointer relative",
                        i !== liveContracts.length - 1 && "border-b border-border/50",
                      )}
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="flex-1 min-w-0 pr-6">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                            {contract.title}
                          </h3>
                          {contract.fidelCertifiedOnly && (
                            <div className="flex items-center gap-1 bg-primary/5 text-primary px-2 py-0.5 rounded-full border border-primary/10">
                              <Award className="h-3 w-3" />
                              <span className="text-[10px] font-bold uppercase tracking-wider">Certified Only</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5 font-medium text-foreground/80">
                            <Building2 className="h-3.5 w-3.5" />
                            {contract.company}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="font-mono text-xs bg-secondary px-2 py-0.5 rounded text-foreground/70">
                            ${(contract.compensation.base.min / 1000).toFixed(0)}k-$
                            {(contract.compensation.base.max / 1000).toFixed(0)}k base
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 shrink-0">
                        <div className="flex gap-2">
                          <Badge
                            variant="secondary"
                            className="rounded-md px-2.5 py-1 text-[11px] font-medium text-muted-foreground border-border/50 bg-background shadow-sm"
                          >
                            {contract.tags.contractType}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="rounded-md px-2.5 py-1 text-[11px] font-medium text-muted-foreground border-border/50 bg-background shadow-sm"
                          >
                            {contract.tags.offerType}
                          </Badge>
                        </div>
                        <div className="text-xs font-medium text-muted-foreground w-16 text-right">
                          {contract.postedAt}
                        </div>
                        <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center bg-background group-hover:border-primary/30 group-hover:text-primary transition-all">
                          <ChevronRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Readiness & Sessions */}
              <div className="col-span-4 space-y-8">
                {/* Market Readiness */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Readiness</h2>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>

                  <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm space-y-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Award className="h-24 w-24" />
                    </div>

                    <div className="flex items-end justify-between relative z-10">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground block mb-1">Profile Strength</span>
                        <span className="text-3xl font-bold text-foreground">{marketReadiness.score}%</span>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>

                    <Progress value={marketReadiness.score} className="h-2 bg-secondary" />

                    <div className="space-y-3 pt-2 relative z-10">
                      {[
                        { label: "Proof uploaded", done: marketReadiness.proofUploaded },
                        { label: "Recordings added", done: marketReadiness.recordingsAdded },
                        { label: "Desperado Certified", done: marketReadiness.certified },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-sm group cursor-pointer">
                          <span
                            className={cn(
                              "transition-colors",
                              item.done
                                ? "text-foreground font-medium"
                                : "text-muted-foreground group-hover:text-foreground",
                            )}
                          >
                            {item.label}
                          </span>
                          {item.done ? (
                            <CheckCircle2 className="h-4 w-4 text-primary fill-primary/10" />
                          ) : (
                            <div className="h-4 w-4 rounded-full border-2 border-border group-hover:border-primary/50 transition-colors" />
                          )}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                      Complete Profile
                    </Button>
                  </div>
                </div>

                {/* Upcoming Sessions */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Sessions</h2>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      View Calendar
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {upcomingSessions.map((session) => (
                      <div
                        key={session.id}
                        className="bg-card border border-border/50 rounded-xl p-4 hover:shadow-md hover:border-primary/20 transition-all duration-300 group cursor-pointer flex gap-4 items-center"
                      >
                        <div className="h-12 w-12 rounded-lg bg-secondary flex flex-col items-center justify-center shrink-0 border border-border/50 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                          <span className="text-[10px] font-bold uppercase text-muted-foreground group-hover:text-primary/70">
                            {session.date.split(" ")[0]}
                          </span>
                          <span className="text-sm font-bold text-foreground group-hover:text-primary">
                            {session.date.split(" ")[1]}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold leading-tight text-foreground group-hover:text-primary transition-colors truncate">
                            {session.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Starts in 2 hours • <span className="text-primary font-medium">Join Now</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="h-20 w-20 rounded-2xl bg-secondary flex items-center justify-center shadow-inner">
              <Briefcase className="h-10 w-10 text-muted-foreground/50" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground tracking-tight">Coming Soon</h3>
              <p className="text-muted-foreground max-w-md mx-auto mt-2 text-lg">
                The {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} module is currently under development.
              </p>
            </div>
            <Button variant="outline" onClick={() => setActiveTab("dashboard")}>
              Return to Dashboard
            </Button>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      {/* Sidebar - Ultra Clean */}
      <aside className="w-[260px] border-r border-border bg-sidebar flex flex-col shrink-0 z-20">
        <div className="h-16 flex items-center px-6 border-b border-border/50">
          <div className="flex items-center gap-3 font-bold text-lg tracking-tight text-foreground">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <div className="h-3 w-3 bg-white rounded-sm rotate-45" />
            </div>
            <span>Desperado Hub</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
            { id: "opportunities", icon: Briefcase, label: "Opportunities" },
            { id: "training", icon: GraduationCap, label: "Training" },
            { id: "hpp", icon: Target, label: "HPP" },
            { id: "leaderboard", icon: Trophy, label: "Leaderboard" },
            { id: "calendar", icon: Calendar, label: "Calendar" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                activeTab === item.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary",
              )}
            >
              <item.icon
                className={cn(
                  "h-4 w-4 transition-colors",
                  activeTab === item.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground group-hover:text-foreground",
                )}
              />
              {item.label}
              {activeTab === item.id && <div className="absolute right-3 h-1.5 w-1.5 rounded-full bg-white/50" />}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-5 text-primary-foreground shadow-lg shadow-primary/20 relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="h-16 w-16 rotate-12" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Award className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="text-sm font-bold">Fidel Certified</p>
              </div>
              <p className="text-xs text-white/80 mb-4 leading-relaxed font-medium">
                Unlock premium roles by completing core training.
              </p>
              <div className="flex items-center text-xs font-bold bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm hover:bg-white/20 transition-colors">
                View Path <ArrowRight className="ml-auto h-3 w-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border/50 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-bold text-foreground">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">Operator Tier</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-background relative overflow-hidden">
        {/* Top Navigation / Header */}
        <header className="h-16 border-b border-border/50 flex items-center justify-between px-8 bg-background/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              {activeTab === "dashboard" ? "Overview" : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search opportunities..."
                className="w-full h-10 bg-secondary/50 border border-border/50 rounded-full pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all placeholder:text-muted-foreground text-foreground"
              />
            </div>

            <div className="h-6 w-[1px] bg-border/80" />

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full relative"
            >
              <Bell className="h-4.5 w-4.5" />
              <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-destructive border-2 border-background" />
            </Button>

            <Button className="h-9 rounded-full px-4 gap-2 shadow-lg shadow-primary/20">
              <Plus className="h-4 w-4" /> New Action
            </Button>
          </div>
        </header>

        {/* Rotating Wins Banner - Refined Ticker */}
        <div className="bg-secondary/30 border-b border-border/50 py-2.5 px-6 flex items-center justify-center relative overflow-hidden">
          <div className="flex items-center gap-4 max-w-5xl mx-auto w-full justify-center">
            <div className="flex items-center gap-2 shrink-0">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Live Wins</span>
            </div>

            <div className="h-5 w-[1px] bg-border" />

            <div className="h-6 overflow-hidden relative flex-1 max-w-2xl">
              <div
                key={currentWinIndex}
                className="animate-in slide-in-from-bottom-2 fade-in duration-500 absolute w-full text-sm font-medium text-foreground/80 flex items-center truncate"
              >
                <Trophy className="h-3.5 w-3.5 text-primary mr-2" />
                {topWins[currentWinIndex]}
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-8 scroll-smooth">{renderContent()}</div>
      </main>
    </div>
  )
}
