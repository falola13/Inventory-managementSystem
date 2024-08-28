import {
  CircleCheck,
  CircleDollarSign,
  CircleEllipsis,
  CircleGauge,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";

export default function SalesOverview() {
  const salesActivity = [
    {
      title: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-blue-600",
      icon: <CircleCheck className="w-4 h-4" />,
    },
    {
      title: "To be Shipped",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600",
      icon: <CircleGauge className="w-4 h-4" />,
    },
    {
      title: "To be Delivered",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-green-600",
      icon: <CircleEllipsis className="w-4 h-4" />,
    },
    {
      title: "To be Invoiced",
      number: 0,
      unit: "Qty",
      href: "#",
      color: "text-orange-600",
      icon: <CircleDollarSign className="w-4 h-4" />,
    },
  ];
  const inventorySummary = [
    {
      title: "Quantity in Hand",
      number: 10,
    },
    {
      title: "Quantity to be Received",
      number: 0,
    },
  ];
  return (
    <div className="bg-blue-50 border-b border-slate-300  grid grid-cols-12 gap-4">
      {/* Sales Activity */}
      <div className="col-span-8 border-r border-slate-300 p-8">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className=" pr-8 grid grid-cols-4 gap-4">
          {/* Card */}
          {salesActivity.map((item, i) => {
            return <SalesActivityCard item={item} key={i} />;
          })}
        </div>
      </div>
      {/* Inventory Summary */}
      <div className="col-span-4 p-8">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div className="">
          {inventorySummary.map((item, i) => {
            return <InventorySummaryCard item={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
