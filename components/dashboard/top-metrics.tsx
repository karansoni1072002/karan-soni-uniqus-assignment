"use client";

import type React from "react";
import { Assets } from "@/public/assets";

interface MetricsProps {
  metrics: Array<{
    label: string;
    value: string;
    icon: string;
    bgColor: string;
    iconColor: string;
  }>;
}

export function TopMetrics({ metrics }: MetricsProps) {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
      {metrics.map((metric, idx) => {
        const IconComponent = Assets[metric.icon];
        if (!IconComponent) return null;
        return (
          <div
            key={idx}
            className="bg-white rounded-lg px-2 py-4 md:p-6 min-w-36 w-full"
          >
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-2">
              <div className="flex flex-col-reverse md:flex-col md:gap-2 items-center">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <h3 className="text-2xl font-bold text-card-foreground">
                  {metric.value}
                </h3>
              </div>
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-blue-500"
                style={{ backgroundColor: metric.bgColor }}
              >
                <IconComponent color={metric.iconColor} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
