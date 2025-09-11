// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerApplication, start, getAppNames } from "single-spa";
import { BrowserRouter } from "react-router";
import App from "./components/App";
import apps from "./apps";
import "./styles.css";

apps.forEach((app) => {
    registerApplication({
        name: app.name,
        activeWhen: app.basename,     // <— String, kein domElementGetter
        app: () => import(/* @vite-ignore */ app.name),
        customProps: { basename: app.basename }, // optional, falls MFE Router nutzt
    });
});

if (import.meta.env.DEV) {
    console.log("APPLICATIONS", getAppNames());
    localStorage.setItem("imo-ui", "true");
} else {
    localStorage.setItem("imo-ui", "false");
}
start();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
