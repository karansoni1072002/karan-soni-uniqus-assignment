"use client";

import { useState } from "react";
import type { Sale } from "@/types/dashboard";
import { Assets } from "@/public/assets";
interface SalesTableProps {
  sales: Sale[];
}

export function SalesTable({ sales }: SalesTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(sales.length / itemsPerPage);
  const paginatedSales = sales.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [selectedFilterForTable, setSelectedFilterForTable] =
    useState<string>("day");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Shipped":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Processing":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Cancelled":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="">
      <div className="bg-white px-4 py-5 rounded flex justify-between">
        <h2 className="text-xl font-semibold text-card-foreground">
          Latest sales
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedFilterForTable("day")}
            className={`text-xs cursor-pointer font-semibold px-2 py-1 hover:shadow rounded-sm text-muted-foreground ${
              selectedFilterForTable === "day" && "text-card-foreground shadow"
            }`}
          >
            Day
          </button>
          <button
            onClick={() => setSelectedFilterForTable("week")}
            className={`text-xs cursor-pointer font-semibold px-2 py-1 hover:shadow rounded-sm text-muted-foreground ${
              selectedFilterForTable === "week" && "text-card-foreground shadow"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setSelectedFilterForTable("month")}
            className={`text-xs cursor-pointer font-semibold px-2 py-1 hover:shadow rounded-sm text-muted-foreground ${
              selectedFilterForTable === "month" &&
              "text-card-foreground shadow"
            }`}
          >
            Month
          </button>
          <button
            className={`text-xs cursor-pointer font-semibold px-2 py-1 hover:shadow rounded-sm text-muted-foreground `}
          >
            <Assets.Calendar1 size={16} />
          </button>
        </div>
      </div>
      <div className="bg-white rounded overflow-hidden">
        {/* Table for Desktop and Tablet */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background2 ">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Delivery
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Subtotal
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Shipping
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="">
              {paginatedSales.map((sale) => (
                <tr
                  key={sale.id}
                  className="hover:bg-muted/10 hover:shadow-sm transition-colors"
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <Assets.MacbookPro width={40} className="rounded" />
                    <div>
                      <p className="font-medium text-card-foreground">
                        {sale.productName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ID {sale.customerId}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-card-foreground">
                        {sale.customerName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {sale.email}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-card-foreground">
                        {sale.delivery}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {sale.city}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-2 rounded-sm text-xs font-semibold ${getStatusColor(
                        sale.status
                      )}`}
                    >
                      {sale.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-card-foreground">
                    ${sale.subtotal}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-card-foreground">
                    ${sale.shipping}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-card-foreground">
                    ${sale.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-3 p-4">
          {paginatedSales.map((sale) => (
            <div
              key={sale.id}
              className="bg-muted bg-opacity-30 rounded-lg p-4 border border-border"
            >
              <div className="flex items-start gap-3">
                <Assets.MacbookPro width={40} className="rounded" />
                <div className="flex-1">
                  <p className="font-semibold text-card-foreground text-sm">
                    {sale.productName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ID {sale.customerId}
                  </p>
                </div>
                <p className="text-sm font-bold text-card-foreground">
                  ${sale.total}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 flex gap-2 items-center text-sm font-medium text-muted-foreground rounded-sm bg-background3 hover:text-card-foreground disabled:opacity-50"
          >
            <Assets.ChevronLeft size={16} /> PREV
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                  currentPage === page
                    ? "bg-logo-blue/10 text-logo-blue"
                    : "text-muted-foreground hover:text-card-foreground"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-2 flex gap-2 items-center text-sm font-medium text-muted-foreground rounded-sm bg-background3  hover:text-card-foreground disabled:opacity-50"
          >
            NEXT <Assets.ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
