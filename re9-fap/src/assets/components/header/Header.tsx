import './header.css';
import Button from "../buttons/Buttons";
import { MouseEventHandler } from 'react';

function Burguermenu({onClick}: {onClick:MouseEventHandler}) {

    return (
        <>
        <div className="burguer-menu" onClick={onClick}>
            <div className="line-buguer-menu"></div>
            <div className="line-buguer-menu"></div>
            <div className="line-buguer-menu"></div>
        </div>
        </>
    )
}


function Header() {

    function handleClickmenu() {
        const menu = document.querySelector("ul.menu-header")
        menu?.classList.toggle("menu-header-visible");
    }
    
    return (
        <>
            <header>
                <nav className="nav-bar">
                <div className="left-header">
                    <Burguermenu 
                    onClick={handleClickmenu}
                    />
                    <ul className='menu-header'>
                        <li>Login</li>
                        <li>Cadastre-se</li>
                    </ul>
                </div>
                <div className="center-header">
                    <div className="logo"></div>
                </div>
                <div className="right-header">
                    <div className='logo-right'>LOGO</div>
                    <div className="buttons-container">
                        <Button stylebutton="primary-button" text="Entrar"/>
                        <Button stylebutton="secundary-button" text="Cadastre-se"/>
                    </div>
                </div>
                </nav>
            </header>
        </>
    )
}

export default Header;