export interface Authorizers {
    [key: string]: AuthDetails;
}
export interface AuthDetails {
    apiToken: string;
}
export interface APIScopes {
    Mail: Permission[];
    Calendar: Permission[];
    Task: Permission[];
}
export declare enum Permission {
    Create = 0,
    Read = 1,
    Update = 2,
    Delete = 3
}
