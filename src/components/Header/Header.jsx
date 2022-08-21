import React from 'react'
import './Header.css'

const Header = ({headerExpanded}) => {
    return (
        <div className='header'>
            <img alt="Header"
                className={`header-img-${headerExpanded ? 'expanded' : 'contracted'}`}
                src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png'
            />
            <h1 className='head-text'>NameIt App!</h1>
        </div>
    )
}

export default Header;