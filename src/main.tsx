import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "@/App";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/index.css";

let redirectPath: string | null = null;

try {
  redirectPath = window.sessionStorage.getItem("redirect-path");
} catch {
  redirectPath = null;
}

if (redirectPath) {
  try {
    window.sessionStorage.removeItem("redirect-path");
    const cleanBase = import.meta.env.BASE_URL.replace(/\/$/, "");
    window.history.replaceState({}, "", `${cleanBase}${redirectPath}`);
  } catch {
    // Ignore session storage or history access failures and continue booting.
  }
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
