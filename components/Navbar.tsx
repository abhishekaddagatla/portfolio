"use client";

import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">home</HoveredLink>
        <HoveredLink href="/work">work</HoveredLink>
        <HoveredLink href="/skills">skills</HoveredLink>
        <HoveredLink href="/music">music</HoveredLink>
      </Menu>
    </div>
  );
};

export default Navbar;
