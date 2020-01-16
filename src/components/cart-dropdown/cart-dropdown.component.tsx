import React from 'react';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { AppState } from '../../app.types';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { Item } from '../../pages/shop/shop.types';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { CartActionsTypes } from '../../redux/cart/cartActions.types';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

interface CartDropdownProps extends RouteComponentProps<any> {
    cartItems: Item[];
    dispatch: Dispatch<CartActionsTypes>;
}

interface CartDropdownStateToPropsType {
    cartItems: Item[];
}

const CartDropdown: React.FC<CartDropdownProps> = ({
    cartItems,
    history,
    dispatch
}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className="empty-message">Your cart is empty</span>
            )}
            <Button
                inverted
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
            </Button>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector<
    AppState,
    CartDropdownStateToPropsType
>({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
