// import { Catalog } from './store/index';
// import { useRef, useState } from 'react';




// export const Store = () => {

//     const FILTER_RANGE = [
//         {text: 'від', name: 'min-price', defaultValue: 0},
//         {text: 'до', name: 'max-price', defaultValue: 15000}
//     ]

//     const FILTER_NETWORK = [
//         {text: 'Адаптивна', id: 'Adaptive1'},
//         {text: 'Фіксована', id: 'Fixed2'},
//         {text: 'Гумова', id: 'Rubber3'},
//     ]

//     const FILTER_FEATURES = [
//         {text: 'Слайдер', value: 'Slider', id: 'defaultCheck1'},
//         {text: 'Блок преимуществ', value: 'blockFeatures', id: 'defaultCheck2'},
//         {text: 'Новости', value: 'News', id: 'defaultCheck3'},
//         {text: 'Галерея', value: 'Gallery', id: 'defaultCheck4'},
//         {text: 'Корзина', value: 'Cart', id: 'defaultCheck5'},
//     ]

//     const inputRange = useRef();

//     const [inputRadio, setInputRadio] = useState();
//     const [inputCheckbox, setInputCheckbox] = useState();
//     const [objectFilter, setObjectFilter] = useState({})

//     const getInputRadio = (event) => {
//         event.preventDefault();
//         console.log(event.target.id)
//         setInputRadio(event.target.id)
//     }

//     const getInputCheckbox = (event) => {
//         event.preventDefault();
//         console.log(event.target.value)

//     }

//     const filterGoods = (event) => {
//         event.preventDefault();
//         console.log(event);
//         setObjectFilter(prev => inputRange.current.value)
//     }




//     return ( 
//         <>
//             <div className="container-fluid bg-color-main mb-5 py-5">
//                 <h1 className="container text-center">Магазин готовых шаблонов</h1>
//             </div>
//             <div className="container">

//                 <div className="row row-cols-2">
                    
//                     <form className="col-3" id='idRange'>
                       
//                         <h2 className="visually-hidden">Фильтр шаблонов</h2>
//                         <fieldset className="">
//                             <legend>Стоимость:</legend>
//                             <div className='w-75'>
//                                 <label htmlFor="customRange2" className="form-label">Пример диапазона</label>
//                                 <input type="range" className="form-range" min="0" max="15000" id="customRange" value='' ref={inputRange}></input>
                                    
//                                 <div className="d-flex justify-content-around">

//                                     {FILTER_RANGE.map(({ text, name, defaultValue }) =>

//                                         <label key={text} className="d-flex w-50"
//                                             >{text}
//                                             <input className='store__input-range' type="number" name={name} defaultValue={defaultValue} id="customRange"/>
//                                         </label>
//                                     )}

//                                 </div>
//                             </div>
//                         </fieldset>


//                         <form onChange={getInputRadio}>
//                             <h3>Сітка:</h3>

//                             {FILTER_NETWORK.map(({ text, id, htmlFor }) =>
  
//                                 <div key={text} className="form-check" >
//                                     <input className="form-check-input" type="radio" name="flexRadioDefault" id={id} />
//                                     <label className="form-check-label" htmlFor='flexRadioDefault1'>
//                                         {text}
//                                     </label>
//                                 </div>
//                             )}

//                         </form>

//                         <form onChange={getInputCheckbox}>
//                             <h3>Особености:</h3>

//                             {FILTER_FEATURES.map(({ text, value, id, htmlFor }) =>

//                                 <div key={text} className="form-check">                           
//                                     <input className="form-check-input" type="checkbox" value={value} id={id} />
//                                     <label className="form-check-label" htmlFor='defaultCheck1'>
//                                         {text}
//                                     </label>
//                                 </div>
//                             )}

//                         </form>

//                         <button className="btn btn-primary" type="submit" onClick={filterGoods}>Показати</button>      
//                     </form>

//                     <div className="col-9">
//                         <Catalog objectFilter={objectFilter}/> 
//                     </div>

//                 </div>
//             </div>
//         </>

    
//     )
// }