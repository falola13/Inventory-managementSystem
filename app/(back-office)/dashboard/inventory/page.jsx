import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Inventory() {
  const optionCards = [
    {
      title: "Item Groups",
      description:
        "Create multiple variants of the same item using item Groups",
      link: "/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Shirt,
    },
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      link: "/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Shirt,
    },
    {
      title: "Composite Items",
      description:
        "Create multiple variants of the same item using item Groups",
      link: "/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Shirt,
    },
    {
      title: "Price Lists",
      description:
        "Create multiple variants of the same item using item Groups",
      link: "/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Shirt,
    },
  ];
  return (
    <div>
      <FixedHeader />
      <div className="grid grid-col-1 lg:grid-cols-2 px-16 py-8 gap-6">
        {optionCards.map((card, i) => {
          return <OptionCard optionData={card} key={i} />;
        })}
      </div>
    </div>
  );
}
