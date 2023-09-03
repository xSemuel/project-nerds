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


                        <div>
                            <h3>Сітка:</h3>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Адаптивна
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Фіксована
                                </label>

                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Гумова
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Гумова
                                </label>
                            </div>
                        </div>

<div>

                        <h3>Особености:</h3>
                        <div className="form-check">                           
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                 Слайдер
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Блок преимуществ
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                            Новости
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                            Галерея
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                            Корзина
                            </label>
                        </div>
</div>

                       
                        <button className="btn btn-filter" type="submit">Показати</button>      
                    </div>

                    <div className="col-8">
                        <Catalog /> 
                    </div>

                </div>
            </div>
        </>

    
    )
}