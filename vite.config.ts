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
                dev:   ["src/importMap.dev.json", "src/importMap.shared.json"],
                build: ["src/importMap.json",     "src/importMap.shared.json"],
                type: "importmap",
            },
            imo: "4.2.0",
            imoUi: { variant: "full", buttonPos: "bottom-right" },
        }),],
    build: {
        target: 'chrome89',
        modulePreload: false,
        rollupOptions: {
            // React wird extern geliefert (Import-Map in root)
            external: ['react', 'react-dom', 'react-dom/client'],
            output: { format: 'esm' },
        },
    }
})
