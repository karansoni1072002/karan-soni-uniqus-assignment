"use client";

import { useState } from "react";
import { DashboardProvider, useDashboardData } from "@/lib/data-provider";
import { Sidebar } from "@/components/dashboard/sidebar";
import { TopHeader } from "@/components/dashboard/top-header";
import { TopMetrics } from "@/components/dashboard/top-metrics";
import { SalesTable } from "@/components/dashboard/sales-table";
import { MessagesSidebar } from "@/components/dashboard/messages-sidebar";
import { BottomNav } from "@/components/dashboard/bottom-nav";

function DashboardContent() {
  const { metrics, sales, conversionData, messages } = useDashboardData();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [isMessageSidebarOpen, setIsMessageSidebarOpen] = useState(true);
  return (
    <div className="flex h-dvh bg-background overflow-hidden">
      {/* Desktop Sidebar - Hidden on mobile, 80px on tablet, 250px on desktop */}
      <div className="hidden md:block">
        <Sidebar
          isCollapsed={sidebarCollapsed}
          isMessageSidebarOpen={isMessageSidebarOpen}
        />
      </div>

      {isMessageSidebarOpen && (
        <div className="hidden lg:block">
          <MessagesSidebar
            messages={messages}
            setSidebarCollapsed={setSidebarCollapsed}
            setIsMessageSidebarOpen={setIsMessageSidebarOpen}
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Scrollable Content */}
        <div className="flex-1 bg-background2 overflow-y-auto pb-20 md:pb-0 flex">
          <main className="px-4 py-2 space-y-6 w-full">
            {/* Top Metrics - Grid adjusted: 1 col mobile, 2 cols tablet, 4 cols desktop */}
            <TopMetrics metrics={metrics} />

            {/* Sales Table */}
            <div>
              <SalesTable sales={sales} />
            </div>
            <div
              className="md:hidden"
              style={{
                height:
                  "calc(var(--bottom-nav-bar-h, 48px) + env(safe-area-inset-bottom))",
              }}
              aria-hidden
            />
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

export default function Dashboard() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}
