"use client";

import { TargecyTracker } from "@targecy/sdk";
import { Home } from "./home";

export const env =
  (process.env.NEXT_PUBLIC_NODE_ENV as
    | "development"
    | "preview"
    | "production") || "development";


export default function App() {
  return (
    <TargecyTracker env={env}>
      <Home></Home>;
    </TargecyTracker>
  );
}
