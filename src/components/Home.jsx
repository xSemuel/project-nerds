import cartIcon from '../images/cart-icon.svg';
import nerdsLogo from '../images/nerds-logo.svg';
import Slide1 from '../images/slide_1.png'
import Slide2 from '../images/slide_2.png'
import Slide3 from '../images/slide_3.png'

export const Home = () => {
    return ( 
        <>
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

            <div className="container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={Slide1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Метка первого слайда</h5>
                            <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={Slide2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Метка второго слайда</h5>
                            <p>Некоторый репрезентативный заполнитель для второго слайда.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={Slide3} className="d-block w-100" alt="..." />
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
