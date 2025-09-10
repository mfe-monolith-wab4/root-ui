// apps.ts (dein Default-Array)
export default [
    {
        name: '@agile-software-engineering/news',
        // nur Startseite oder optional /news
        activeWhen: (loc: Location) => loc.pathname === '/' || loc.pathname.startsWith('/news'),
        mountWhere: '#mfe-news',
    },
    {
        name: '@agile-software-engineering/grades',
        activeWhen: (loc: Location) => loc.pathname.startsWith('/grades'),
        mountWhere: '#mfe-grades',
    },
] as const
