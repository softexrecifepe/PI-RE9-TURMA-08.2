import './header.css';
import Button from "../buttons/Buttons";

function Burguermenu() {
    
    return (
        <>
        <div className="burguer-menu">
            <div className="line-buguer-menu"></div>
            <div className="line-buguer-menu"></div>
            <div className="line-buguer-menu"></div>
        </div>
        </>
    )
}


function Header() {
    
    return (
        <>
            <header>
                <nav className="nav-bar">
                <div className="left-header"><Burguermenu/></div>
                <div className="center-header">
                    <div className="logo"></div>
                </div>
                <div className="right-header">
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