import { NavLink } from "react-router-dom";
import { NAVIGATION_LINKS, Main_link, Cart_link } from '../constants';

export const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg pt-50 bg-color-main">
            <div className="container">
                <NavLink className="navbar-brand" to={Main_link.link}>
                    <img className="d-inline-block align-text-top" src={Main_link.logo} width="160" heigth="65"  alt="Nerds logo" />
                </NavLink>

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
                        <img src={Cart_link.logo} width="15" heigth="11" alt="Cart"/>
                        <NavLink className="nav-link" to={Cart_link.link}>{Cart_link.text}</NavLink>
                    </div>
                </div>    
            </div>
        </nav>
    );
}
