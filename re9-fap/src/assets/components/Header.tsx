import Button from "./Buttons";

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
                <Burguermenu/>

                    <div className="buttons-container">
                        <div className="logo"></div>
                        <div className="btn">
                        <Button stylebutton="primary-button button-header" text="Entrar"/>
                        <Button stylebutton="secundary-button button-header" text="Cadastre-se"/>
                    </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;