import { Link, useNavigate } from "react-router";


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
            <Link to="/news" style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "30px",
            }} >
                News
            </Link>

            <Link to="/grades" style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "30px",
            }}>
                Grades
            </Link>

        </nav>
    );
}

export default NavBar;