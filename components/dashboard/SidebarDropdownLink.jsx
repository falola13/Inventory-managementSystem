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
    <Collapsible>
      <CollapsibleTrigger
        onClick={handleToggle}
        className=" flex items-center justify-between  w-full "
      >
        <div className="flex p-2 items-center space-x-2">
          <Icon className={`w-4 h-4 ${isOpen ? "text-blue-600" : ""}`} />{" "}
          <span className={isOpen ? "text-blue-600" : ""}>{title}</span>{" "}
        </div>
        <div className="">
          {isOpen ? (
            <GoTriangleDown
              className={`w-4 h-4 ${isOpen ? "text-blue-600" : "text-white"}`}
            />
          ) : (
            <GoTriangleRight
              className={`w-4 h-4 ${isOpen ? "text-blue-600" : "text-white"}`}
            />
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
