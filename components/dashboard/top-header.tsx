"use client";
import { Menu, Search, Settings } from "lucide-react";

interface TopHeaderProps {
  onMenuToggle?: () => void;
}

export function TopHeader({ onMenuToggle }: TopHeaderProps) {
  return (
    <div className="sticky top-0 z-40 bg-background2">
      <div className="flex items-center justify-between px-6 py-4 gap-4">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={onMenuToggle}
            className="p-2 cursor-pointer rounded-sm transition-colors bg-background4"
          >
            <Menu size={14} className="text-card-foreground" />
          </button>
          <h1 className="text-2xl font-semibold text-card-foreground">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 cursor-pointer rounded-sm transition-colors bg-background4 hidden sm:block">
            <Search size={20} className="text-muted-foreground" />
          </button>
          <button className="p-2 cursor-pointer rounded-sm transition-colors bg-background4">
            <Settings size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
