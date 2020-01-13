export interface User {
    id: string;
    createAt: Date | null;
    displayName: string;
    email: string;
}

export interface UserState {
    currentUser: User | null;
}
