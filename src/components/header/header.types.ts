import { User } from '../../redux/user/user.types';

export interface HeaderProps {
    currentUser: User | null;
    hidden: boolean;
}
