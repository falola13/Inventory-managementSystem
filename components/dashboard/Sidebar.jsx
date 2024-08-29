"use client";
import {
  BaggageClaim,
  BarChart4,
  ChevronLeft,
  FilePlus2,
  Home,
  PlusCircle,
  Shell,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import CollapsibleLink from "./CollapsibleLink";
import SidebarDropdownLink from "./SidebarDropdownLink";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { BsCartCheckFill, BsBasket3Fill } from "react-icons/bs";

export default function Sidebar() {
  const inventoryLinks = [
    {
      title: "Items",
      href: "/dashboard/inventory",
    },
    {
      title: "Item Groups",
      href: "/dashboard/inventory",
    },
    {
      title: "Inventory Adjustments",
      href: "#",
    },
  ];
  const salesLinks = [
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Sales Orders",
      href: "#",
    },
    {
      title: "Packages",
      href: "#",
    },
    {
      title: "Shipments",
      href: "#",
    },
    {
      title: "Invoices",
      href: "#",
    },
    {
      title: "Sales Receipts",
      href: "#",
    },
    {
      title: "Payment Received",
      href: "#",
    },
    {
      title: "Sales Returns",
      href: "#",
    },
    {
      title: "Credit Note",
      href: "#",
    },
  ];
  return (
    <div>
      <div className="w-60 min-h-screen bg-slate-800 text-slate-50 flex flex-col justify-between fixed">
        {/* Top part */}
        <div className="flex flex-col">
          {/* Logo */}
          <Link
            href="/dashboard/home"
            className="bg-slate-950 flex space-x-2 items-center py-3 px-2"
          >
            <RiShoppingCart2Fill className="w-5 h-5 text-blue-400" />
            {/* <ShoppingCart /> */}
            <span className="text-xl  font-semibold">EasyInventory</span>
            {/* Links */}
          </Link>
          <nav className="flex flex-col gap-3 px-3 py-6">
            <Link
              href="#"
              className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
            >
              <Home className="w-4 h-4" /> <span>Home</span>
            </Link>
            <SidebarDropdownLink
              items={inventoryLinks}
              title="Inventory"
              icon={BsCartCheckFill}
            />

            <SidebarDropdownLink
              items={salesLinks}
              title="Sales"
              icon={BsBasket3Fill}
            />

            <button className="p-2 flex items-center space-x-2">
              <ShoppingBag className="w-4 h-4" /> <span>Purchases</span>
            </button>
            <Link href="#" className="p-2 flex items-center space-x-2">
              <Shell className="w-4 h-4" /> <span>Integrations</span>
            </Link>
            <Link href="#" className="p-2 flex items-center space-x-2">
              <BarChart4 className="w-4 h-4" /> <span>Reports</span>
            </Link>
            <Link href="#" className="p-2 flex items-center space-x-2">
              <FilePlus2 className="w-4 h-4" /> <span>Documents</span>
            </Link>
          </nav>
        </div>
        {/* Bottom part */}
        <div className="flex flex-col ">
          {/* Subscription Card */}
          <SubscriptionCard />
          {/* Footer Icon */}
          <button className="bg-slate-950 flex justify-center space-x-2 items-center py-3 px-2">
            <ChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
}
