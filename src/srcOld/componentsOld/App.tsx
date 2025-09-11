// src/components/App.tsx
import { MfeSlot } from './MfeSlot'
import { navigateToUrl } from 'single-spa'

const App = () => {
    return (
        <div className="app-shell">
            <nav
                className="navbar"
                style={{ display: 'flex',alignItems:"flex-end", gap: '30px', padding: '10px 20px', borderBottom: '1px solid #ddd', background: '#fafafa' }}
            >
                SMS Prototype - Root UI

                {/* einfache SPA-Links über single-spa */}
                <a
                    href="/root-ui/public"
                    onClick={navigateToUrl}
                    style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "30px",
                    }}
                >
                    News
                </a>
                <a
                    href="/grades"
                    onClick={navigateToUrl}
                    style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "30px",
                    }}
                >
                    Grades
                </a>
            </nav>

            <main style={{ padding: 20, display: 'grid', gap: 20 }}>
                <MfeSlot slotId="mfe-news"   title="News"   appName="@agile-software-engineering/news" />
                <MfeSlot slotId="mfe-grades" title="Grades" appName="@agile-software-engineering/grades" />
            </main>

            <footer className="footer">Footer</footer>
        </div>
    )
}
export default App
