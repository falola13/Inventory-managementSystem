import {
  BaggageClaim,
  BarChart4,
  ChevronLeft,
  FilePlus2,
  Home,
  Shell,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";

export default function Sidebar() {
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
            <ShoppingCart />
            <span className="text-xl  font-semibold">Inventory</span>
            {/* Links */}
          </Link>
          <nav className="flex flex-col gap-3 px-3 py-6">
            <Link
              href="#"
              className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
            >
              <Home className="w-4 h-4" /> <span>Home</span>
            </Link>
            <button className="p-2 flex items-center space-x-2">
              <BaggageClaim className="w-4 h-4" /> <span>Inventory</span>
            </button>
            <button className="p-2 flex items-center space-x-2">
              <ShoppingBasket className="w-4 h-4" /> <span>Sales</span>
            </button>
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
          <SubscriptionCard />
        </div>
        {/* Bottom part */}
        <div className="flex flex-col ">
          <button className="bg-slate-950 flex justify-center space-x-2 items-center py-3 px-2">
            <ChevronLeft />
          </button>
        </div>
        {/* Subscription Card */}
        {/* Footer Icon */}
      </div>
    </div>
  );
}
