// src/components/App.tsx
import NavBar from "./NavBar/NavBar";
import RoutingComponent from "./RoutingComponent/RoutingComponent";

export default function App() {
    return (
        <div className="app-shell">
            <header>
                <NavBar />
            </header>
            <main style={{ padding: 20, display: 'grid', gap: 20 }}>
                <RoutingComponent />
            </main>
            <footer className="footer">Footer</footer>
        </div>
    );
}
