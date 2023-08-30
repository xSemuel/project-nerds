import cartIcon from '../images/cart-icon.svg';
import nerdsLogo from '../images/nerds-logo.svg';

export const Home = () => {
    return ( 
        <div className="container-fluid">
            <nav className="">
                <a className="navbar-brand" href="!#">
                <img className="d-inline-block align-text-top" src={nerdsLogo} width="160" heigth="65"  alt="Nerds logo" />
                </a>
                <ul className="">
                <li className=""><a href="!#">Студия</a> </li>
                <li className=""><a href="!#">Клиенты</a></li>
                <li className=""><a href="!#">Магазин</a></li>
                <li className=""><a href="!#">Контакты</a></li> 
                </ul>
                <div className="">
                <img src={cartIcon} width="15" heigth="15" alt="Cart"/>
                <a href="blank.html">Корзина</a>
                </div>
            </nav>
        </div>

    );
}
