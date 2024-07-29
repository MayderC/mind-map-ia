
export enum ROLES {
    VIP = 'VIP',
    USER = 'USER',
    GUEST = 'GUEST',
    ADMIN = 'ADMIN'
}

export enum MAP_TYPES {}

export type ALLOWED_MAP_TYPES = (typeof MAP_TYPES)[keyof typeof MAP_TYPES];
export type ALLOWED_ROLES = (typeof ROLES)[keyof typeof ROLES];


// MAPMIND CANVAS PROVIDERS

export enum CANVAS_PROVIDERS {
    EXCALIDRAW = 'EXCALIDRAW',
    GOJS = 'GOJS',
    
}

export type ALLOWED_CANVAS_PROVIDERS = (typeof CANVAS_PROVIDERS)[keyof typeof CANVAS_PROVIDERS];

// MAPMIND LANGUAGES SUPPORTED
export enum LANGUAGES_CANVAS {
    MERMAID = 'MERMAID',
}

export type ALLOWED_LANGUAGES_CANVAS = (typeof LANGUAGES_CANVAS)[keyof typeof LANGUAGES_CANVAS];