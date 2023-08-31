import { Header } from './Header';

import Slide1 from '../images/slide_1.png'
import Slide2 from '../images/slide_2.png'
import Slide3 from '../images/slide_3.png'

import advantage1 from '../images/illustration_1.jpg';
import advantage2 from '../images/illustration_2.jpg';
import advantage3 from '../images/illustration_3.jpg';


export const Home = () => {
    return ( 
        <>
        <Header />    
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

        <div className="container mt-5 d-flex justify-content-between">
            <div className="card" style={{width: '18.75rem', height: '21.87rem'}}>
                <img src={advantage1} className="card-img-top mb-4" alt="..." height= '146px' width='300px' />
                <div clasNameclassNames="card-body">
                    <h3 className="card-title mb-3">Веб-сайты</h3>
                    <p className="card-text mb-4">Мир никогда не будет прежним после того как увидит ваш сайт!</p>
                    <a href="!#" className="btn btn-primary">УЗНАТЬ БОЛЬШЕ</a>
                </div>
            </div>
            <div className="card" style={{width: '18.75rem', height: '21.87rem'}}>
                <img src={advantage2} className="card-img-top mb-4" alt="..." />
                <div clasNameclassNames="card-body">
                    <h3 className="card-title mb-3">Приложения</h3>
                    <p className="card-text mb-4">Покорите топ-10 приложений в AppStore и Google Play</p>
                    <a href="!#" className="btn btn-primary">УЗНАТЬ БОЛЬШЕ</a>
                </div>
            </div>
            <div className="card" style={{width: '18.75rem', height: '21.87rem'}}>
                <img src={advantage3} className="card-img-top mb-4" alt="..." />
                <div clasNameclassNames="card-body">
                    <h3 className="card-title mb-3">Презентации</h3>
                    <p className="card-text mb-4">Вы даже не подозреваете, насколько вы изумительны!</p>
                    <a href="!#" className="btn btn-primary">УЗНАТЬ БОЛЬШЕ</a>
                </div>
            </div>
        </div>
    </>
    


);
}
