import React from 'react';
import { DirectoryProps, DirectoryState } from './directory.types';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import SECTIONS_DATA from '../../mock/sections.data';

class Directory extends React.Component<DirectoryProps, DirectoryState> {
    constructor(props: DirectoryProps) {
        super(props);

        this.state = {
            sections: SECTIONS_DATA
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
