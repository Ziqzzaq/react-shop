import React from 'react';
import { ShopPageProps } from '../../models/props/ShopPageProps';
import SHOP_DATA from '../../mock/shop.data';
import { ShopState } from '../../models/state/shopState';

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
