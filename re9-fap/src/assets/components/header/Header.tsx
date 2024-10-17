import './header.css';
import Button from "../buttons/Buttons";
import { MouseEventHandler } from 'react';

function Burguermenu({onClick}: {onClick:MouseEventHandler}) {

    return (
        <>
        <div className="burguer-menu" onClick={onClick}>
            <div className="line-buguer-menu" id='line-1'></div>
            <div className="line-buguer-menu" id='line-2'></div>
            <div className="line-buguer-menu" id='line-3'></div>
        </div>
        </>
    )
}


function Header() {

    function handleClickmenu() {
        const menu = document.querySelector("ul.menu-header")
        const burguerMenu = document.querySelector("div.burguer-menu")

        const line1 = burguerMenu?.querySelector("div#line-1")
        const line2 = burguerMenu?.querySelector("div#line-2")
        const line3 = burguerMenu?.querySelector("div#line-3")

        if (menu?.classList.contains("menu-header-visible")) {
            menu?.classList.remove("menu-header-visible");
            line1?.classList.remove("active")
            line2?.classList.remove("active")
            line3?.classList.remove("active")
        } else {
            menu?.classList.add("menu-header-visible");
            line1?.classList.add("active")
            line2?.classList.add("active")
            line3?.classList.add("active")
        }
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