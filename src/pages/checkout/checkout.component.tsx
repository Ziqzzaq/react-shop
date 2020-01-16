import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { AppState } from '../../app.types';
import { Item } from '../shop/shop.types';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

interface CheckoutStateToPropsType {
    cartItems: Item[];
    total: number;
}

type CheckoutProps = CheckoutStateToPropsType;

const CheckoutPage: React.FC<CheckoutProps> = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector<AppState, CheckoutStateToPropsType>(
    {
        cartItems: selectCartItems,
        total: selectCartTotal
    }
);

export default connect(mapStateToProps)(CheckoutPage);
