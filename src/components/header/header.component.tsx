import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../helpers/firebase/firebase.helper';
import { HeaderProps } from '../../models/props/HeaderProps';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { AppState } from '../../models/state/AppState';

const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                    {' '}
                    SIGN OUT{' '}
                </div>
            ) : (
                <Link className="option" to="/sign-in">
                    {' '}
                    SIGN IN{' '}
                </Link>
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = ({ userState, cartState }: AppState) => ({
    currentUser: userState.currentUser,
    hidden: cartState.hidden
});
export default connect(mapStateToProps)(Header);
