// vite.config.ts (Host)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
    base: '/',
    plugins: [
        react(),
        federation({
            name: 'root_ui',
            manifest: true,
            remotes: {
                newsService: { type: 'module', name: 'newsService', entry: 'http://localhost:5176/remoteEntry.js' },
                gradeService:{ type: 'module', name: 'gradeService', entry: 'http://localhost:5175/remoteEntry.js' },
            },
            shared: {
                react: { singleton: true, requiredVersion: '^19.0.0' },
                'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
                'react-dom/client': { singleton: true, requiredVersion: '^19.0.0' },
            },
        }),
    ],
    resolve: {
        dedupe: ['react','react-dom'],
        conditions: ['browser','development'],
    },
    optimizeDeps: {
        // nichts rund um MF vor-optimieren lassen
        exclude: ['@module-federation/runtime', '@module-federation/runtime-tools'],
    },
    build: {
        target: 'chrome89',
        modulePreload: false,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
})
