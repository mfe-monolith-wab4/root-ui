// src/components/MfeSlot.tsx
import { useEffect, useState } from 'react'
import { getAppStatus } from 'single-spa'

const isAppActive = (name: string) => {
    const s = getAppStatus(name)
    return s === 'MOUNTED' || s === 'MOUNTING'
}

export function MfeSlot({
                            slotId,
                            title,
                            appName, // ⬅️ NEU
                        }: {
    slotId: string
    title: string
    appName: string
}) {
    const [loaded, setLoaded] = useState(false)
    const [active, setActive] = useState<boolean>(isAppActive(appName))

    useEffect(() => {
        const onRoute = () => setActive(isAppActive(appName))
        window.addEventListener('single-spa:routing-event', onRoute)
        window.addEventListener('single-spa:app-change', onRoute)
        return () => {
            window.removeEventListener('single-spa:routing-event', onRoute)
            window.removeEventListener('single-spa:app-change', onRoute)
        }
    }, [appName])

    useEffect(() => {
        if (!active) return
        const el = document.getElementById(slotId)
        if (!el) return
        const check = () => setLoaded(el.childElementCount > 0)
        check()
        const obs = new MutationObserver(check)
        obs.observe(el, { childList: true })
        return () => obs.disconnect()
    }, [slotId, active])

    return (
        <div className="card" style={{ display: active ? 'block' : 'none' }}>
            <div className="card-header">
                <h2>{title}</h2>
                {!loaded && <span className="muted">Loading…</span>}
            </div>
            <div className="card-body">
                <div id={slotId} />
                {!loaded && (
                    <div className="loader" aria-busy="true" aria-live="polite">
                        <div className="spinner" />
                    </div>
                )}
            </div>
        </div>
    )
}
