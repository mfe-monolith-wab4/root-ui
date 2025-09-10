// src/components/App.tsx
import { MfeSlot } from './MfeSlot'
import { navigateToUrl } from 'single-spa'

const App = () => {

    const pathname = window.location.pathname

    const linkStyle = (active: boolean): React.CSSProperties => ({
        textDecoration: "none",
        color: active ? "#000" : "#555",
        fontWeight: active ? "bold" : "normal",
        fontSize: "30px",
    })

    return (
        <div className="app-shell">
            <nav
                className="navbar"
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "12px",
                    padding: "10px 20px",
                    borderBottom: "1px solid #ddd",
                    background: "#fafafa",
                }}
            >
                SMS Prototype - Root UI

                <a
                    href="/"
                    onClick={navigateToUrl}
                    style={linkStyle(pathname === "/" || pathname.startsWith("/news"))}
                >
                    News
                </a>
                <a
                    href="/grades"
                    onClick={navigateToUrl}
                    style={linkStyle(pathname.startsWith("/grades"))}
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
