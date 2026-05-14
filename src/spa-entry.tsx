/**
 * SPA entry point for static hosting (GitHub Pages).
 * Unlike the default TanStack Start SSR entry, this uses createRoot
 * to mount a client-only React app without requiring server-rendered HTML.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { getRouter } from "./router";

const router = getRouter();
const queryClient = router.options.context.queryClient;

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
