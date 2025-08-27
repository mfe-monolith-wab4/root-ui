import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from "vite-plugin-single-spa";


export default defineConfig({
    server: { port: 5170 },
    base: '/',
    plugins: [react(),
        vitePluginSingleSpa({
            type: "root",
            importMaps: {
                // Wähle EINE Schreibweise – hier mit großem M wie in der Doku/Defaults:
                dev:   ["src/importMap.dev.json", "src/importMap.shared.json"],
                build: ["src/importMap.json",     "src/importMap.shared.json"],
                type: "importmap", // explizit
            },
            // Debug-Ausgaben des Plugins (schreiben in die Konsole/Log-Datei)
            logging: { incomingConfig: true, config: true },
            // IMO ist optional – schadet nicht
            imo: "4.2.0",
            imoUi: { variant: "full", buttonPos: "bottom-right" },
        }),],
    build: {
        target: 'chrome89',
        modulePreload: false,
    },
})
