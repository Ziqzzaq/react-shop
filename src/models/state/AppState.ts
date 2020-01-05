export interface AppState {
    currentUser: {
        id: string;
        createAt: Date | null;
        displayName: string;
        email: string;
    } | null;
}
