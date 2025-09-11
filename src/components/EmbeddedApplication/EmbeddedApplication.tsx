// src/components/EmbeddedApplication/EmbeddedApplication.tsx
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function EmbeddedApplication({
                                                name,
                                                sx,
                                            }: { name: string; sx?: React.CSSProperties }) {
    return (
    <div className="card" >
        <div className="card-header">
            <h2>{name.split('/')[1]}</h2>
        </div>
        <div className="card-body">
            <div id={`single-spa-application:${name}`}>
                <LoadingComponent />
            </div>
        </div>
    </div>

    );
}
