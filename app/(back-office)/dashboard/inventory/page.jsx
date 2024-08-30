"use client";
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Medal, Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Inventory() {
  const optionCards = [
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      icon: "one-bg",
    },
    {
      title: "Categories",
      description: "Bundle different items together and sell them as kits",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
      icon: "three-bg",
    },
    {
      title: "Brands",
      description:
        "Tweak your item prices for specific contacts or transactions",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "New Brand",
      enabled: true,
      icon: "pricetag-bg",
    },
    {
      title: "Warehouse",
      description:
        "Tweak your item prices for specific contacts or transactions",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: "composite-bg",
    },
    {
      title: "Units",
      description:
        "Tweak your item prices for specific contacts or transactions",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: "two-bg",
    },
    {
      title: "Inventory Adjustment",
      description: "Transfer stock from the main Warehouse",
      link: "/dashboard/inventory/adjustments/new",
      linkTitle: "New Adjustemnt",
      enabled: true,
      icon: "two-bg",
    },
  ];
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 px-16 py-8 gap-6">
        {optionCards.map((card, i) => {
          return <OptionCard optionData={card} key={i} />;
        })}
      </div>
    </div>
  );
}
