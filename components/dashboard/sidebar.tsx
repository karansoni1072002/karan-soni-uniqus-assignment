"use client";
import { Assets } from "@/public/assets";
import { useState } from "react";
interface SidebarProps {
  isCollapsed: boolean;
  isMessageSidebarOpen: boolean;
}

export function Sidebar({ isCollapsed, isMessageSidebarOpen }: SidebarProps) {
  const menuItems = [
    { order: 1, icon: Assets.Gauge, label: "Reports" },
    { order: 2, icon: Assets.Briefcase, label: "Admin" },
    { order: 3, icon: Assets.BookCheck, label: "Tasks" },
    { order: 4, icon: Assets.Layers2, label: "Analytics" },
    { order: 5, icon: Assets.Calendar1, label: "Calendar" },
    { order: 6, icon: Assets.UserLock, label: "People" },
    { order: 7, icon: Assets.MessagesSquare, label: "Messages" },
    { order: 8, icon: Assets.Box, label: "Sandbox" },
    { order: 9, icon: Assets.NotebookText, label: "Notes" },
    { order: 10, icon: Assets.Files, label: "Files" },
    { order: 11, icon: Assets.CircleCheck, label: "Security" },
    { order: 12, icon: Assets.Folder, label: "Folders" },
    { order: 13, icon: Assets.CircleQuestionMark, label: "Help" },
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(1);

  return (
    <aside
      className={`flex flex-col h-screen bg-white border-r border-sidebar-border transition-all duration-300 ${
        isCollapsed && isMessageSidebarOpen ? "w-20" : "w-64"
      }`}
    >
      {/* Logo/Brand */}
      <div className="p-4 flex items-center justify-center">
        <Assets.BrandLogo width={40} />
        {!isCollapsed && (
          <span className="ml-3 font-bold text-sidebar-foreground">
            CRAFTUI
          </span>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2 mt-2">
        {menuItems.map((item) => (
          <div
            key={item.order}
            className={`px-4 ${
              selectedMenuItem === item.order &&
              "border border-y-0 border-l-0 border-logo-blue"
            }`}
          >
            <button
              className={`w-full flex cursor-pointer rounded-sm items-center gap-3 px-4 py-3 hover:bg-logo-blue/10 transition-colors ${
                selectedMenuItem === item.order && "bg-logo-blue/10"
              } ${isCollapsed ? "justify-center" : ""}`}
              onClick={() => setSelectedMenuItem(item.order)}
            >
              <item.icon size={25} />
              {!isCollapsed && !isMessageSidebarOpen && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </button>
          </div>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4">
        <button
          className={`w-full flex items-center gap-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:bg-opacity-5 transition-colors  ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <Assets.AccountSettings width={40} className="rounded" />
        </button>
      </div>
    </aside>
  );
}
