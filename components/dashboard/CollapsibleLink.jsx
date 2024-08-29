import { CirclePlus, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CollapsibleLink({ item }) {
  return (
    <Link
      className="flex items-center justify-between pl-8 pr-4 hover:bg-slate-900 transition-all duration-300 py-2 rounded-md space-x-3"
      href={item.href}
    >
      <span className="text-sm">{item.title}</span>
      <CirclePlus className="w-4 h-4 text-white" />
    </Link>
  );
}
