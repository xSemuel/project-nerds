import { FilterPanel, SortPanel } from '../../features'

export const Store = () => {
    return ( 
        <div>
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
                        {/* <div css={css`margin-bottom: 38px;`}>
                            <Typography variant="h3" className="visually-hidden">SortPanel</Typography>
                            <SortFilter options1={SORT_TYPE} options2={SORT_ICON} onClick={onClickSortTypeHandler} onChange={onChangeIconSortHandler} selectedSortIcon={SORT_ICON[0].value}/>
                        </div> */}
                        <h1>Карточки товаров</h1>
                    </div>    
                    
                </div>

            </div>
            
        </div>

    );
}