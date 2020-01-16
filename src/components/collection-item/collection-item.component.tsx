import React from 'react';

import './collection-item.styles.scss';
import Button from '../button/button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { Item } from '../../pages/shop/shop.types';

type CollectionItemProps = typeof mapDispatchToProps & { item: Item };

const CollectionItem: React.FC<CollectionItemProps> = ({ addItem, item }) => {
    const { name, imageUrl, price } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button inverted onClick={() => addItem(item)}>
                ADD TO CART
            </Button>
        </div>
    );
};

const mapDispatchToProps = {
    addItem
};

export default connect(null, mapDispatchToProps)(CollectionItem);
