import React from 'react'
import NavBarLink from '../micros/NavBarLink';
export default function NavigationBar() {
    return (
        <nav className="mainnavbar">
            <div className="wrapper">
                <NavBarLink title="Home" linkUrl="homeurl" />
                <NavBarLink title="About" linkUrl="abouturl" />
                <NavBarLink title="Contact" linkUrl="contacturl" />
            </div>
        </nav>
    )
}
