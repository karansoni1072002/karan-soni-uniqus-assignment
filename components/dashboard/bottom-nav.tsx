"use client";

import { useState, useEffect, useRef } from "react";
import { Assets } from "@/public/assets";
import { AutoHeightCollapse } from "@/lib/utils";

export function BottomNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = barRef.current; // measure the bar only
    if (!el) return;

    const setVar = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--bottom-nav-bar-h",
        `${h}px`
      );
    };

    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

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

  return (
    <div className="fixed inset-x-0 bottom-0 bg-sidebar md:hidden z-50">
      {/* Backdrop */}
      <button
        onClick={() => setIsExpanded(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-[1px] transition-opacity duration-300 z-20
          ${
            isExpanded
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className="w-full z-50 bg-white">
        {/* Expanded Menu (auto-height via measurement) */}
        <AutoHeightCollapse isOpen={isExpanded}>
          <div className="grid grid-cols-5 gap-2 px-3 py-3 border-b border-sidebar-border">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                className="flex flex-col items-center gap-1 py-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors"
              >
                <item.icon size={20} />
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </AutoHeightCollapse>

        {/* Navigation Bar */}
        <div
          ref={barRef}
          className={`flex items-center justify-around p-3 transition-all duration-300
          ${
            isExpanded
              ? "opacity-0 translate-y-4 pointer-events-none hidden"
              : "opacity-100 translate-y-0 pointer-events-auto"
          }`}
          aria-hidden={isExpanded}
        >
          {menuItems.slice(0, 4).map((item, idx) => (
            <button
              key={idx}
              className="p-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors"
            >
              <item.icon size={24} />
            </button>
          ))}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-2 transition-colors ${
              isExpanded
                ? "text-sidebar-primary"
                : "text-sidebar-foreground hover:text-sidebar-primary"
            }`}
          >
            <Assets.Menu size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
