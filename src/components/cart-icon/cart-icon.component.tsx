import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CartActionsTypes } from '../../redux/cart/cartActions.types';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { AppState } from '../../models/state/AppState';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

type CartIconProps = ReturnType<typeof mapDispatchToProps> &
    ReturnType<typeof mapStateToProps>;

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch: Dispatch<CartActionsTypes>) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state: AppState) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
