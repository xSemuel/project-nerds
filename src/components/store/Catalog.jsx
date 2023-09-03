export const Catalog = () => {
    return ( 
        <div className="catalog">
            <h2 className="visually-hidden">Каталог шаблонов</h2>
            <div className="wrap-catalog">
                <div className="catalog-sort">
                    <h3>Сортировать:</h3>
                    <div className="sort-inner">
                        <ul className="sort-type-list">
                            <li className="sort-type-item current-type-item">
                                <a href> По цене </a>
                            </li>
                            <li className="sort-type-item">
                                <a href="!#"> По типу </a>
                            </li>
                            <li className="sort-type-item">
                                <a href="!#"> По названию </a>
                            </li>
                        </ul>
                        <div className="sort-badge current-badge">
                            <a href>
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
                    <li className="catalog-item">
                        <div className="catalog-slider">
                            <div className="circle"></div>
                        </div>
                        <div className="catalog-img">
                            <h3 className="visually-hidden">Cайт Седона</h3>
                            <img
                                src="img/img-sedona-1.jpg"
                                width="358"
                                height="578"
                                alt="Изображение главной страницы сайта Седона"
                            />
                        </div>
                        <div className="catalog-item-description">
                            <h3>
                                <a href="!#" aria-label="открыть окно с демонстрацией сайта"
                                >SEDONA
                                </a>
                            </h3>
                            <p>
                                Информационный сайт <br />
                                для туристов
                            </p>
                            <button
                                className="btn btn-catalog-item"
                                type="button"
                                aria-label="добавить в корзину создание сайта по шаблону SEDONA"
                            >
                                9 900 <span>&!#8381;</span>
                            </button>
                        </div>
                    </li>
                    <li className="catalog-item">
                        <div className="catalog-slider">
                            <div className="circle"></div>
                        </div>
                        <div className="catalog-img">
                            <h3 className="visually-hidden">Cайт PINK APP</h3>
                            <img
                                src="img/img-pink-1.jpg"
                                width="358"
                                height="578"
                                alt="Изображение главной страницы сайта PINK"
                            />
                        </div>
                        <div className="catalog-item-description">
                            <h3>
                                <a href="!#" aria-label="открыть окно с демонстрацией сайта"
                                >PINK APP</a
                                >
                            </h3>
                            <p>Продуктовый лендинг приложения для iOS и Android</p>
                            <button
                                className="btn btn-catalog-item"
                                type="button"
                                aria-label="добавить в корзину создание сайта по шаблону PINK APP"
                            >
                                9 900 <span>&!#8381;</span>
                            </button>
                        </div>
                    </li>
                    <li className="catalog-item">
                        <div className="catalog-slider">
                            <div className="circle"></div>
                        </div>
                        <div className="catalog-img">
                            <h3 className="visually-hidden">Cайт Барбершоп «Бородинский»</h3>
                            <img
                                src="img/img-barbershop-1.jpg"
                                width="358"
                                height="578"
                                alt="Изображение главной страницы сайта Барбершоп «Бородинский»"
                            />
                        </div>
                        <h3 className="visually-hidden">Cайт MISHKA</h3>
                        <div className="catalog-item-description">
                            <h3>
                                <a href="!#" aria-label="открыть окно с демонстрацией сайта"
                                >Барбершоп «Бородинский»</a
                                >
                            </h3>
                            <p>Сайт мужской парикмахерской</p>
                            <button
                                className="btn btn-catalog-item"
                                type="button"
                                aria-label="добавить в корзину создание сайта по шаблону Барбершоп «Бородинский»"
                            >
                                9 900 <span>&!#8381;</span>
                            </button>
                        </div>
                    </li>
                    <li className="catalog-item">
                        <div className="catalog-slider">
                            <div className="circle"></div>
                        </div>
                        <div className="catalog-img">
                            <h3 className="visually-hidden">Cайт MISHKA</h3>
                            <img
                                src="img/img-mishka-1.jpg"
                                width="358"
                                height="578"
                                alt="Изображение главной страницы сайта MISHKA"
                            />
                        </div>
                        <div className="catalog-item-description">
                            <h3>
                                <a href="!#" aria-label="открыть окно с демонстрацией сайта"
                                >MISHKA</a
                                >
                            </h3>
                            <p>Сайт о товарах ручной работы</p>
                            <button
                                className="btn btn-catalog-item"
                                type="button"
                                aria-label="добавить в корзину создание сайта по шаблону MISHKA"
                            >
                                9 900 <span>&!#8381;</span>
                            </button>
                        </div>
                    </li>
                    <li className="catalog-item">
                        <div className="catalog-slider">
                            <div className="circle"></div>
                        </div>
                        <div className="catalog-img">
                            <h3 className="visually-hidden">Cайт A+</h3>
                            <img
                                src="img/img-aplus-1.jpg"
                                width="358"
                                height="578"
                                alt="Изображение главной страницы сайта A+"
                            />
                        </div>
                        <div className="catalog-item-description">
                            <h3>
                                <a href="!#" aria-label="открыть окно с демонстрацией сайта"
                                >A+</a
                                >
                            </h3>
                            <p>Сайт учебного заведения</p>
                            <button
                                className="btn btn-catalog-item"
                                type="button"
                                aria-label="добавить в корзину создание сайта по шаблону А+"
                            >
                                9 900 <span>&!#8381;</span>
                            </button>
                        </div>
                    </li>
                    <li className="catalog-item">
                        <div className="catalog-slider">
                            <div className="circle"></div>
                        </div>
                        <div className="catalog-img">
                            <h3 className="visually-hidden">Cайт КВАСТ</h3>
                            <img
                                src="img/img-kvast-1.jpg"
                                width="358"
                                height="578"
                                alt="Изображение главной страницы сайта КВАСТ"
                            />
                        </div>
                        <div className="catalog-item-description">
                            <h3>
                                <a href="!#" aria-label="открыть окно с демонстрацией сайта"
                                >КВАСТ</a
                                >
                            </h3>
                            <p>Сайт производителя крафтового кваса</p>
                            <button
                                className="btn btn-catalog-item"
                                type="button"
                                aria-label="добавить в корзину создание сайта по шаблону КВАСТ"
                            >
                                9 900 <span>&!#8381;</span>
                            </button>
                        </div>
                    </li>
                </ul>
                <ul className="page-list">
                    <li className="page-item current-page-item">
                        <a href>1</a>
                    </li>
                    <li className="page-item">
                        <a href="!#" aria-label="перейти на страницу 2">2</a>
                    </li>
                    <li className="page-item">
                        <a href="!#" aria-label="перейти на страницу 3">3</a>
                    </li>
                    <li className="page-item">
                        <a href="!#" aria-label="перейти на следующую страницу"
                        >СЛЕДУЮЩАЯ</a
                        >
                    </li>
                </ul>
         
            </div>
        </div>

    )
}
 
