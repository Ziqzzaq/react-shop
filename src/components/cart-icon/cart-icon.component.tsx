import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CartActionsTypes } from '../../redux/cart/cartActions.types';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartState } from '../../models/state/CartState';

type CartIconProps = ReturnType<typeof mapDispatchToProps> &
    ReturnType<typeof mapStateToProps>;

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden, cartHidden }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = (dispatch: Dispatch<CartActionsTypes>) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state: CartState) => ({
    cartHidden: state.hidden
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
