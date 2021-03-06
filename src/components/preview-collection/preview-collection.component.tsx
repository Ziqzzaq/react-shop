import React from 'react';

import './preview-collection.scss';

import { PreviewCollectionProps } from './preview-collection.types';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection: React.FC<PreviewCollectionProps> = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default PreviewCollection;
