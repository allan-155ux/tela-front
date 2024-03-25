import React, { useState } from 'react'

import './styles.css'

import DashBoardAnalytics from '../../components/DashboardAnalytics'
import DashBoardMenu from '../../components/DashboardMenu'
import { Outlet } from 'react-router-dom'

function DashBoard() {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <div className='dashboard-container'>
            <DashBoardMenu setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen}/>
            <Outlet/>
            <DashBoardAnalytics />
        </div>
    )
}

export default DashBoard