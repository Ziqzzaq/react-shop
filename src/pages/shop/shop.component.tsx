import React from 'react';
import { ShopPageProps, ShopState } from './shop.types';
import SHOP_DATA from '../../mock/shop.data';

import './shop.styles.scss';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component<ShopPageProps, ShopState> {
    constructor(props: ShopPageProps) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ title, items, id }) => (
                    <PreviewCollection key={id} title={title} items={items} />
                ))}
            </div>
        );
    }
}

export default ShopPage;
