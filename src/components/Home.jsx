import cartIcon from '../images/cart-icon.svg';
import nerdsLogo from '../images/nerds-logo.svg';

export const Home = () => {
    return ( 
        <>
            <nav classNameName="navbar navbar-expand-lg pt-50 bg-color-main">
                <div classNameName="container">
                    <a classNameName="navbar-brand" href="!#">
                        <img classNameName="d-inline-block align-text-top" src={nerdsLogo} width="160" heigth="65"  alt="Nerds logo" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
                            <li classNameName="nav-item"><a classNameName="nav-link active" href="!#">Студия</a> </li>
                            <li classNameName="nav-item"><a classNameName="nav-link" href="!#">Клиенты</a></li>
                            <li classNameName="nav-item"><a classNameName="nav-link" href="!#">Магазин</a></li>
                            <li classNameName="nav-item"><a classNameName="nav-link" href="!#">Контакты</a></li> 
                        </ul>
                        <div classNameName="d-flex gap-3">
                            <img src={cartIcon} width="15" heigth="11" alt="Cart"/>
                            <a classNameName="nav-link" href="!#">Корзина</a>
                        </div>
                    </div>    
                </div>
            </nav>

            <div classNameName="container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Метка первого слайда</h5>
                            <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Метка второго слайда</h5>
                            <p>Некоторый репрезентативный заполнитель для второго слайда.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Метка третьего слайда</h5>
                            <p>Некоторый репрезентативный заполнитель для третьего слайда.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Предыдущий</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Следующий</span>
                    </button>                   
                </div>
            </div>
        </>
        


    );
}
