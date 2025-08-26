import React, { Suspense } from 'react';


// Remote-Module per MF: alias/exposedPath
const NewsApp = React.lazy(() => import('newsService/App'));
const GradeApp = React.lazy(() => import('gradeService/App'));

export default function App() {
    return (
        <div style={{ padding: 16 }}>
            <h1>Root UI (Host)</h1>

            <section style={{ marginTop: 16 }}>
                <h2>News</h2>
                <Suspense fallback={<div>Loading News…</div>}>
                    <NewsApp />
                </Suspense>
            </section>

            <section style={{ marginTop: 16 }}>
                <h2>Grades</h2>
                <Suspense fallback={<div>Loading Grades…</div>}>
                    <GradeApp />
                </Suspense>
            </section>
        </div>
    );
}

