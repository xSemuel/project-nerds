import aplusImg from './img/img-aplus-1.jpg';
import barberImg from './img/img-barbershop-1.jpg';
import kvastImg from './img/img-kvast-1.jpg';
import mishkaImg from './img/img-mishka-1.jpg';
import pinkImg from './img/img-pink-1.jpg';
import sedonaImg from './img/img-sedona-1.jpg';

const CATALOG_IMG = [
    {title: 'Cайт Седона', srcLogo: sedonaImg, alt: 'Изображение главной страницы сайта Седона', descName: 'SEDONA', descInfo: `Информационный сайт <br /> для туристов`, descAriaLabel: 'добавить в корзину создание сайта по шаблону SEDONA', descPrice: '9900' }, 
    {title: 'Cайт PINK APP', srcLogo: pinkImg, alt: 'Изображение главной страницы сайта PINK', descName: 'PINK APP', descInfo: `Продуктовый лендинг приложения для iOS и Android`, descAriaLabel: 'добавить в корзину создание сайта по шаблону PINK APP', descPrice: '9900' }, 
    {title: 'Cайт Барбершоп «Бородинский»', srcLogo: barberImg, alt: 'Изображение главной страницы сайта Барбершоп «Бородинский»', descName: 'Barbershop', descInfo: `Сайт мужской парикмахерской`, descAriaLabel: 'добавить в корзину создание сайта по шаблону Барбершоп «Бородинский»', descPrice: '9900' }, 
    {title: 'Cайт MISHKA', srcLogo: mishkaImg, alt: 'Изображение главной страницы сайта MISHKA', descName: 'Mishka', descInfo: `Сайт о товарах ручной работы`, descAriaLabel: 'добавить в корзину создание сайта по шаблону MISHKA', descPrice: '9900' }, 
    {title: 'Cайт A+', srcLogo: aplusImg, alt: 'Изображение главной страницы сайта A+', descName: 'A+', descInfo: `Сайт учебного заведения`, descAriaLabel: 'добавить в корзину создание сайта по шаблону А+', descPrice: '9900' }, 
    {title: 'Cайт КВАСТ', srcLogo: kvastImg, alt: 'Изображение главной страницы сайта КВАСТ', descName: 'КВАСТ', descInfo: `Сайт производителя крафтового кваса`, descAriaLabel: 'добавить в корзину создание сайта по шаблону КВАСТ', descPrice: '9900' }, 
]

export const Catalog = () => {
    return ( 
        <div className="catalog">
            <h2 className="visually-hidden">Каталог шаблонов</h2>
            <div className="wrap-catalog">
                <div className="d-flex justify-content-between text-uppercase">
                    <h3>Сортировать:</h3>
                    <div className="d-flex justify-content-between">
                        <ul className="d-flex">
                            <li className="sort-type-item">
                                <a href='!#'> По цене </a>
                            </li>
                            <li className="sort-type-item">
                                <a href="!#"> По типу </a>
                            </li>
                            <li className="sort-type-item">
                                <a href="!#"> По названию </a>
                            </li>
                        </ul>
                        <div className="sort-badge">
                            <a href='!#'>
                                <svg
                                    role="img"
                                    aria-label="Значок по убыванию"
                                    width="11"
                                    height="10"
                                    viewBox="0 0 11 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M5.5 10L0 0H11" />
                                </svg>
                            </a>
                        </div>
                        <div className="sort-badge">
                            <a href="!#">
                                <svg
                                role="img"
                                aria-label="Значок по возрастанию"
                                width="11"
                                height="10"
                                viewBox="0 0 11 10"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g>
                                    <path d="M5.5 0L0 10H11L5.5 0Z" />
                                </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className="catalog-list">
                    
                    {CATALOG_IMG.map(({ title, srcLogo, alt, descName, descInfo, descAriaLabel, descPrice }, index) => 

                        <li key={index} className="catalog-item">
                            <div className="catalog-slider">
                                <div className="circle"></div>
                            </div>
                            <div className="catalog-img">
                                <h3 className="visually-hidden">{title}</h3>
                                <img
                                    src={srcLogo}
                                    width="358"
                                    height="578"
                                    alt={alt}
                                />
                            </div>
                            <div className="catalog-item-description">
                                <h3>
                                    <a href="!#" aria-label="открыть окно с демонстрацией сайта"
                                    >{descName}</a>
                                </h3>
                                <p>{descInfo}</p>
                                <button
                                    className="btn btn-catalog-item"
                                    type="button"
                                    aria-label={descAriaLabel}
                                >
                                    {descPrice} <span>&!#8381;</span>
                                </button>
                            </div>
                        </li>
                    )},
                </ul>
                <nav aria-label="..." >
                    <ul className="pagination d-flex justify-content-center">
                        <li className="page-item disabled">
                            <span className="page-link">Предыдущая</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="!#">1</a></li>
                        <li className="page-item active" aria-current="page">
                            <span className="page-link">2</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="!#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="!#">Следующая</a>
                        </li>
                    </ul>
                </nav>      
            </div>
       </div>
    )
}
 
