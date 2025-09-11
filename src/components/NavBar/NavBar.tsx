import {useNavigate } from "react-router";


function NavBar() {
    return (
        <nav
            className="navbar"
            style={{
                display: 'flex',
                alignItems: "flex-end",
                gap: '30px',
                padding: '10px 20px',
                borderBottom: '1px solid #ddd',
                background: '#fafafa'
            }}
        >
            SMS Prototype - Root UI

            {/* einfache SPA-Links über single-spa */}
            <a
                href="/news"
                onClick={useNavigate}
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
                onClick={useNavigate}
                style={{
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "30px",
                }}
            >
                Grades
            </a>
        </nav>
    );
}

export default NavBar;