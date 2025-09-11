// src/components/RoutingComponent/RoutingComponent.tsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import NewsPage from "../../pages/NewsPage/NewsPage";
import GradesPage from "../../pages/GradesPage/GradesPage";

const routes = [
    { path: "/news",   element: <NewsPage /> },
    { path: "/grades", element: <GradesPage /> },
];

export default function RoutingComponent() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // Landing-Redirect
    useEffect(() => {
        if (pathname === "/") navigate("/news", { replace: true });
    }, [pathname, navigate]);

    const active = routes.find(r => pathname.startsWith(r.path));

    return (
        <>
            {routes.map(r => (
                <div
                    key={r.path}
                    style={{ display: active?.path === r.path ? "block" : "none"}}
                >
                    {r.element}
                </div>
            ))}
        </>
    );
}
