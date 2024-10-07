
import React from "react";
import Nav from "@/app/Nav/Nav";

export default async function Navic({ children }) {
  return (
    <div>
      <Nav
        children={children}
      />
    </div>
  );
}
