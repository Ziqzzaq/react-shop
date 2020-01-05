export interface HeaderProps {
    currentUser: {
        id: string;
        createAt: Date | null;
        displayName: string;
        email: string;
    } | null;
}
