export interface User {
    id: string;
    createAt: Date | null;
    displayName: string;
    email: string;
}

export interface AppState {
    currentUser: User | null;
}
