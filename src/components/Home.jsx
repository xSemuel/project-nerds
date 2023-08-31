import cartIcon from '../images/cart-icon.svg';
import nerdsLogo from '../images/nerds-logo.svg';

export const Home = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary pt-50">
            <div className="container">
                    <a className="navbar-brand" href="!#">
                        <img className="d-inline-block align-text-top" src={nerdsLogo} width="160" heigth="65"  alt="Nerds logo" />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" href="!#">Студия</a> </li>
                            <li className="nav-item"><a className="nav-link" href="!#">Клиенты</a></li>
                            <li className="nav-item"><a className="nav-link" href="!#">Магазин</a></li>
                            <li className="nav-item"><a className="nav-link" href="!#">Контакты</a></li> 
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
