import React from 'react'
import MainContent from './MainContent';
import SideBar from './SideBar';

export default function ContentArea() {
    return (
        <div className="wrapper contentarea">
            <MainContent/>
            <SideBar/>
        </div>
    )
}
