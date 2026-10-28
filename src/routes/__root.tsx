import React, { Suspense } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { Under } from "../components/Under";
import Loader from "../components/Loader";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Under />
    </div>
  );
}

export default RootComponent;
