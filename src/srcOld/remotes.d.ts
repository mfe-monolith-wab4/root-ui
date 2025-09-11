// src/remotes.d.ts
declare module '@agile-software-engineering/news' {
    export function bootstrap(props?: any): Promise<void>;
    export function mount(props?: any): Promise<void>;
    export function unmount(props?: any): Promise<void>;
    export function update(props?: any): Promise<void>;
}
declare module '@agile-software-engineering/grades' {
    export function bootstrap(props?: any): Promise<void>;
    export function mount(props?: any): Promise<void>;
    export function unmount(props?: any): Promise<void>;
    export function update(props?: any): Promise<void>;
}
