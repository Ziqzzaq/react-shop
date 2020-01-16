import React from 'react';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import { HomePageProps } from './home.types';

const HomePage: React.FC<HomePageProps> = () => (
    <div className="homepage">
        <Directory />
    </div>
);

export default HomePage;
