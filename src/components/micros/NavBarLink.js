import React from 'react'

export default function NavBarLink(props) {
    return (
        <a href={props.linkUrl} className="mainnavbar-link">
            {props.title}
        </a>
    )
}
