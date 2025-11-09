"use client"

import type React from "react"
import { createContext, useContext } from "react"
import dashboardDataJson from "./dashboardData.json"
import type { DashboardData } from "@/types/dashboard"

const DashboardContext = createContext<DashboardData | null>(null)

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  // In a real app, this would fetch from an API
  // For now, we use the JSON file - the component structure won't change with API integration
  const data = dashboardDataJson as DashboardData

  return <DashboardContext.Provider value={data}>{children}</DashboardContext.Provider>
}

export function useDashboardData() {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error("useDashboardData must be used within DashboardProvider")
  }
  return context
}
