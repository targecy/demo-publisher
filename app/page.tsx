"use client";

import { TargecyTracker } from "@targecy/sdk";
import { Home } from "./home";
import { env } from "./constants";

export default function App() {
  return (
    <TargecyTracker env={env}>
      <Home></Home>;
    </TargecyTracker>
  );
}
