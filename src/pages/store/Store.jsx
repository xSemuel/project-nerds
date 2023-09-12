import { FilterPanel, SortPanel } from '../../features'

import styles from './Store.module.css'

export const Store = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container-fluid bg-color-main mb-5 py-5">
                <h1 className="container text-center">Магазин готовых шаблонов</h1>
            </div>

            <div className="container">
                <div className="row row-cols-2">
                    <form className="col-3">
                        <FilterPanel />
                    </form>
                    <div className='col-9'>
                        <SortPanel />
                        <h1>Карточки товаров</h1>
                    </div>    
                    
                </div>

            </div>
            
        </div>

    );
}