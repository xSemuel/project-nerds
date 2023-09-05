import { Catalog } from './store/index';
import { useRef } from 'react';

export const Store = () => {

    const FILTER_RANGE = [
        {text: 'від', name: 'min-price', defaultValue: 0},
        {text: 'до', name: 'max-price', defaultValue: 15000}
    ]

    const FILTER_NETWORK = [
        {text: 'Адаптивна', id: 'flexRadioDefault1', htmlFor: 'flexRadioDefault1'},
        {text: 'Фіксована', id: 'flexRadioDefault2', htmlFor: 'flexRadioDefault2'},
        {text: 'Гумова', id: 'flexRadioDefault3', htmlFor: 'flexRadioDefault3'},
    ]

    const FILTER_FEATURES = [
        {text: 'Слайдер', value: 1, id: 'defaultCheck1', htmlFor: 'defaultCheck1'},
        {text: 'Блок преимуществ', value: 2, id: 'defaultCheck2', htmlFor: 'defaultCheck2'},
        {text: 'Новости', value: 3, id: 'defaultCheck3', htmlFor: 'defaultCheck3'},
        {text: 'Галерея', value: 4, id: 'defaultCheck4', htmlFor: 'defaultCheck4'},
        {text: 'Корзина', value: 5, id: 'defaultCheck5', htmlFor: 'defaultCheck5'},
    ]



    const filterGoods = (event) => {
        event.preventDefault();
        
        console.log(event);
    }




    return ( 
        <>
            <div className="container-fluid bg-color-main mb-5 py-5">
                <h1 className="container text-center">Магазин готовых шаблонов</h1>
            </div>
            <div className="container">

                <div className="row row-cols-2">
                    
                    <form className="col-3" id='idRange'>
                       
                        <h2 className="visually-hidden">Фильтр шаблонов</h2>
                        <fieldset className="">
                            <legend>Стоимость:</legend>
                            <div className='w-75'>
                                <label htmlFor="customRange2" className="form-label">Пример диапазона</label>
                                <input type="range" className="form-range" min="0" max="15000" id="customRange"></input>
                                    
                                <div className="d-flex justify-content-around">

                                    {FILTER_RANGE.map(({ text, name, defaultValue }) =>

                                        <label key={text} className="d-flex w-50"
                                            >{text}
                                            <input className='store__input-range' type="number" name={name} defaultValue={defaultValue} id="customRange"/>
                                        </label>
                                    )}

                                </div>
                            </div>
                        </fieldset>


                        <div>
                            <h3>Сітка:</h3>

                            {FILTER_NETWORK.map(({ text, id, htmlFor }) =>
  
                                <div key={text} className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={id} />
                                    <label className="form-check-label" htmlFor={htmlFor}>
                                        {text}
                                    </label>
                                </div>
                            )}

                        </div>

                        <div>
                            <h3>Особености:</h3>

                            {FILTER_FEATURES.map(({ text, value, id, htmlFor }) =>

                                <div key={text} className="form-check">                           
                                    <input className="form-check-input" type="checkbox" value={value} id={id} />
                                    <label className="form-check-label" htmlFor={htmlFor}>
                                        {text}
                                    </label>
                                </div>
                            )}

                        </div>

                        <button className="btn btn-primary" type="submit" onClick={filterGoods}>Показати</button>      
                    </form>

                    <div className="col-9">
                        <Catalog /> 
                    </div>

                </div>
            </div>
        </>

    
    )
}