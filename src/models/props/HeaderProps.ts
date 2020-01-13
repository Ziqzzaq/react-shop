import { User } from '../state/UserState';

export interface HeaderProps {
    currentUser: User | null;
    hidden: boolean;
}
