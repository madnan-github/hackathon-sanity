import { PHeader } from "@/components/header/t2";
import { TopHeader } from "@/components/header/topHeader";
import OurChefs from "@/components/OurChefs/ourChefs";
import React from "react";

export default function ChefPage() {
  return (
    <div>
      <TopHeader />
      <PHeader />
      <OurChefs />
    </div>
  );
}
