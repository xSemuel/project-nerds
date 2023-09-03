import { Catalog } from './store/index';

export const Store = () => {
    return ( 
        <>
            <div className="container-fluid bg-color-main mb-5 py-5">
                <h1 className="container text-center">Магазин готовых шаблонов</h1>
            </div>
            <div className="container">

                <div className="row">
                    
                    <div className="col-4">
                        <div className="filters">
                            <h2 className="visually-hidden">Фильтр шаблонов</h2>
                            <htmlForm
                                className="filteres-htmlForm"
                                method="get"
                                action="https://echo.htmlacademy.ru"
                                target="_blank"
                            >
                            <fieldset className="filter-cost">
                                <legend>Стоимость:</legend>
                                <div className="filter-cost-range">
                                    <div className="range-controls">
                                    <div className="scale">
                                        <div className="bar"></div>
                                    </div>
                                    <div
                                        className="toggle toggle-min"
                                        tabIndex="0"
                                        aria-label="Маркер минимальной цены"
                                    ></div>
                                    <div
                                        className="toggle toggle-max"
                                        tabIndex="0"
                                        aria-label="Маркер максимальной цены"
                                    ></div>
                                    </div>
                                    <div className="range-controls">
                                    <label className="min-price"
                                        >от
                                        <input type="text" name="min-price" defaultValue="0" />
                                    </label>
                                    <label className="max-price"
                                        >до
                                        <input type="text" name="max-price" defaultValue="15 000" />
                                    </label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="filter-grids">
                                <legend>Сетка:</legend>
                                <ul className="filter-grids-list">
                                    <li className="filter-option filter-radio">
                                    <input
                                        className="filter-input filter-input-radio visually-hidden"
                                        id="grid-adaptive"
                                        type="radio"
                                        name="grid"
                                        defaultValue="adaptive"
                                        defaultChecked
                                    />
                                    <label htmlFor="grid-adaptive">Адаптивная</label>
                                    </li>
                                    <li className="filter-option filter-radio">
                                    <input
                                        className="filter-input filter-input-radio visually-hidden"
                                        id="grid-fixed"
                                        type="radio"
                                        name="grid"
                                        defaultValue="fixed"
                                    />
                                    <label htmlFor="grid-fixed">Фиксированная</label>
                                    </li>
                                    <li className="filter-option filter-radio">
                                    <input
                                        className="filter-input filter-input-radio visually-hidden"
                                        id="grid-elastic"
                                        type="radio"
                                        name="grid"
                                        defaultValue=" elastic"
                                    />
                                    <label htmlFor="grid-elastic">Резиновая</label>
                                    </li>
                                </ul>
                            </fieldset>
                            <fieldset className="filter-features">
                                <legend>Особенности:</legend>
                                <ul className="filter-features-list">
                                    <li className="filter-option filter-checkbox">
                                    <input
                                        className="filter-input filter-input-checkbox visually-hidden"
                                        id="feature-slider"
                                        type="checkbox"
                                        name="slider"
                                        defaultChecked
                                    />
                                    <label htmlFor="feature-slider">Слайдер</label>
                                    </li>
                                    <li className="filter-option filter-checkbox">
                                    <input
                                        className="filter-input filter-input-checkbox visually-hidden"
                                        id="feature-block"
                                        type="checkbox"
                                        name="advantages"
                                    />
                                    <label htmlFor="feature-block">Блок преимуществ</label>
                                    </li>
                                    <li className="filter-option filter-checkbox">
                                    <input
                                        className="filter-input filter-input-checkbox visually-hidden"
                                        id="feature-news"
                                        type="checkbox"
                                        name="news"
                                        defaultChecked
                                    />
                                    <label htmlFor="feature-news">Новости</label>
                                    </li>
                                    <li className="filter-option filter-checkbox">
                                    <input
                                        className="filter-input filter-input-checkbox visually-hidden"
                                        id="feature-gallery"
                                        type="checkbox"
                                        name="gallery"
                                    />
                                    <label htmlFor="feature-gallery">Галерея</label>
                                    </li>
                                    <li className="filter-option filter-checkbox">
                                    <input
                                        className="filter-input filter-input-checkbox visually-hidden"
                                        id="feature-cart"
                                        type="checkbox"
                                        name="basket"
                                    />
                                    <label htmlFor="feature-cart">Корзина</label>
                                    </li>
                                </ul>
                            </fieldset>
                            <button className="btn btn-filter" type="submit">Показать</button>
                        </htmlForm>
                        </div>
                        
                    </div>

                    <div className="col-8">
                        <Catalog /> 
                    </div>

                </div>
            </div>
        </>

    
    )
}