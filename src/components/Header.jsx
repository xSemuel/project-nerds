import { NavLink } from "react-router-dom";
import { NAVIGATION_LINKS } from '../constants';
import cartIcon from '../images/cart-icon.svg';
import nerdsLogo from '../images/nerds-logo.svg';

export const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg pt-50 bg-color-main">
            <div className="container">
                <a className="navbar-brand" href="!#">
                    <img className="d-inline-block align-text-top" src={nerdsLogo} width="160" heigth="65"  alt="Nerds logo" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {NAVIGATION_LINKS.map(({ text, link }, index) => 
                            <li className="nav-item" key={index}><NavLink className="nav-link" to={link}>{text}</NavLink></li>
                        )}

                    </ul>

                    <div className="d-flex gap-3">
                        <img src={cartIcon} width="15" heigth="11" alt="Cart"/>
                        <a className="nav-link" href="!#">Корзина</a>
                    </div>
                </div>    
            </div>
        </nav>
    );
}
