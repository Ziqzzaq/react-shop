import React from "react";
import {MenuItemProps} from "../../models/props/MenuItemProps";

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}: MenuItemProps) => (
    <div className={`${size} menu-item`}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;