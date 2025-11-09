import type React from "react";
export interface Metric {
  label: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  bgColor: string;
}

export interface Sale {
  id: string;
  productName: string;
  productImage: string;
  customerId: string;
  customerName: string;
  email: string;
  delivery: string;
  city: string;
  country: string;
  subtotal: number;
  shipping: number;
  total: number;
  status: "Shipped" | "Processing" | "Cancelled";
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface DashboardData {
  metrics: Array<{
    label: string;
    value: string;
    icon: string;
    bgColor: string;
    iconColor: string;
  }>;
  sales: Sale[];
  conversionData: {
    day: ChartDataPoint[];
    week: ChartDataPoint[];
    month: ChartDataPoint[];
  };
  messages: Array<{
    id: string;
    name: string;
    avatar: string;
    message: string;
    time: string;
  }>;
}
