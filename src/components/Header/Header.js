import React from "react";
import logoPath from "../../images/headerLogo.png";

function Header() {
    
    return (      
    <header className='header'>
            <img alt="логотип" src={logoPath} className="header__logo"/>
    </header>
    )
}

export default Header;