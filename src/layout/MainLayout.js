import React from 'react'

import { Outlet } from 'react-router-dom';
import Cart from '../components/Cart';

import './globalstyle.css'

function MainLayout() {
    return (
        <div>
            <main><Outlet/></main>
            <Cart/>
        </div>
    );
}

export default MainLayout