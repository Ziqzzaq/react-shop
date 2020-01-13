import React from 'react';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { Item } from '../../models/state/ShopState';
import CartItem from '../cart-item/cart-item.component';
import { AppState } from '../../models/state/AppState';

interface CartDropdownProps {
    cartItems: Item[];
}

const CartDropdown = ({ cartItems }: CartDropdownProps) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
            <Button inverted>GO TO CHECKOUT</Button>
        </div>
    </div>
);

const mapStateToProps = ({ cartState }: AppState) => ({
    cartItems: cartState.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
