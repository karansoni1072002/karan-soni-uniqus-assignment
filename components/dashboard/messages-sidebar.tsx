"use client";

import { Assets } from "@/public/assets";
import React from "react";

interface Message {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
}

interface MessagesSidebarProps {
  messages: Message[];
  setSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMessageSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MessagesSidebar({
  messages,
  setSidebarCollapsed,
  setIsMessageSidebarOpen,
}: MessagesSidebarProps) {
  return (
    <div className="hidden lg:flex flex-col w-80 h-full bg-white border-r border-border/30 px-6 gap-10">
      <div className="flex justify-between items-start">
        <div className="mt-20 flex flex-col">
          <Assets.BrandLogo />
          <p className="font-light">Welcome,</p>
          <p className="font-semibold text-lg">CRAFTUI</p>
        </div>
        <div className="mt-4">
          <button
            className="cursor-pointer"
            onClick={() => {
              setIsMessageSidebarOpen(false);
              setSidebarCollapsed(false);
            }}
          >
            <Assets.CrossIcon width={15} />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="">
          <h3 className="text-sm font-semibold text-card-foreground">
            Messages
          </h3>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col gap-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="hover:bg-muted hover:bg-opacity-30 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <Assets.AccountSettings width={40} className="rounded" />
                {/* <img
                  src={msg.avatar || "/placeholder.svg"}
                  alt={msg.name}
                  className="w-10 h-10 rounded-full"
                /> */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium text-card-foreground text-sm truncate">
                      {msg.name}
                    </p>
                    <span className="text-xs text-muted-foreground flex-shrink-0">
                      {msg.time}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                    {msg.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
