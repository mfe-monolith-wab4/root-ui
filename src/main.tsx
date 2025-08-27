// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerApplication, start, getAppNames } from 'single-spa'
import apps from './apps'
import App from './components/App'
import './styles.css'


const makeDomElementGetter = (selector: string) => () =>
    document.querySelector(selector)!;

// Apps registrieren – domElementGetter statt domElement
apps.forEach((app) => {
    registerApplication({
        name: app.name,
        activeWhen: app.activeWhen,
        app: () => import(/* @vite-ignore */ app.name), // aus Import-Map
        customProps: {
            domElementGetter: makeDomElementGetter(app.mountWhere),
        },
    })
})

if (import.meta.env.DEV) {
    console.log('APPLICATIONS', getAppNames())
    localStorage.setItem('imo-ui', 'true')
} else {
    localStorage.setItem('imo-ui', 'false')
}

// 1) Zuerst Shell rendern (stellt #mfe-news / #mfe-grades bereit)
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)

// 2) Dann single-spa starten (mount ruft erst JETZT domElementGetter auf)
start()
