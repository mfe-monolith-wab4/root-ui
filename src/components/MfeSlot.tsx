// src/components/MfeSlot.tsx
import { useEffect, useState } from 'react'

export function MfeSlot({ slotId, title }: { slotId: string; title: string }) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const el = document.getElementById(slotId)
        if (!el) return
        // Wenn das Child rendert, blendet der Observer den Loader aus
        const check = () => setLoaded(el.childElementCount > 0)
        check()
        const obs = new MutationObserver(check)
        obs.observe(el, { childList: true })
        return () => obs.disconnect()
    }, [slotId])

    return (
        <div className="card">
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
