import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { AppState } from '../../app.types';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

type CartIconProps = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

interface CartIconStateToPropsType {
    itemCount: number;
}

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = {
    toggleCartHidden
};

const mapStateToProps = createStructuredSelector<AppState, CartIconStateToPropsType>(
    {
        itemCount: selectCartItemsCount
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
