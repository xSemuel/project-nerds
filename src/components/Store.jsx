import { Catalog } from './store/index';

export const Store = () => {
    return ( 
        <>
            <div className="container-fluid bg-color-main mb-5 py-5">
                <h1 className="container text-center">Магазин готовых шаблонов</h1>
            </div>
            <div className="container">

                <div className="row row-cols-2">
                    
                    <div className="col-4">
                       
                        <h2 className="visually-hidden">Фильтр шаблонов</h2>
                        <fieldset className="filter-cost">
                            <legend>Стоимость:</legend>
                            <div className='w-75'>
                                <label for="customRange2" className="form-label">Пример диапазона</label>
                                <input type="range" className="form-range" min="0" max="5" id="customRange2"></input>
                                    
                                <div className="d-flex justify-content-around">
                                    <label className="d-flex w-50"
                                        >от
                                        <input className='store__input-range' type="number" name="min-price" defaultValue="0" id="customRange2"/>
                                    </label>
                                    <label className="d-flex w-50"
                                        >до
                                        <input className='store__input-range' type="number" name="max-price" defaultValue="15 000" id="customRange2"/>
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
                    </div>

                    <div className="col-8">
                        <Catalog /> 
                    </div>

                </div>
            </div>
        </>

    
    )
}