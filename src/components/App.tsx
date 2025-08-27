// src/components/App.tsx (Root-UI)
import { MfeSlot } from './MfeSlot'

const App = () => {
    return (
        <div className="app-shell">
            <nav className="navbar">Navigation</nav>

            <main style={{ padding: 20, display: 'grid', gap: 20 }}>
                    <MfeSlot slotId="mfe-news" title="News" />
                    <MfeSlot slotId="mfe-grades" title="Grades" />
            </main>

            <footer className="footer">Footer</footer>
        </div>
    )
}
export default App
