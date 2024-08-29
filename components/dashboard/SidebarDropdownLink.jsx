"use client";
import React, { useState } from "react";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Play, TriangleRight } from "lucide-react";
import CollapsibleLink from "./CollapsibleLink";

export default function SidebarDropdownLink({ title, items, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Collapsible className="relative">
      <CollapsibleTrigger
        onClick={handleToggle}
        className="p-2 flex items-center justify-between space-x-2 "
      >
        <Icon className={`w-4 h-4 ${isOpen ? "text-blue-600" : ""}`} />{" "}
        <span className={isOpen ? "text-blue-600" : ""}>{title}</span>{" "}
        <div className="absolute top-3 right-2">
          {isOpen ? (
            <GoTriangleDown className="w-4 h-4 text-blue-600" />
          ) : (
            <GoTriangleRight className="w-4 h-4 text-blue-600" />
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {items.map((item, i) => {
          return <CollapsibleLink key={i} item={item} />;
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
