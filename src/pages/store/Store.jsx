/** @jsxImportSource @emotion/react */
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { css } from '@emotion/react';
import { FilterPanel } from '../../features';
import { SortItems, Catalog } from '../../components';
import { SORT_TYPE, SORT_DIR } from '../../constants';
import { selectedSort, updateFilters, selectedFilters, changeDirection, changeType  } from '../../store/slices';


const sortWrapperStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: top;
    min-height: 70px;
`
const titleFilterCost = css`
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 38px;
    padding-top: 5px;
`

export const Store = () => {
    const dispatch = useDispatch();
    const sortsMas = useSelector(selectedSort);
    const filters = useSelector(selectedFilters); // init state

    const onClickSortTypeHandler = (sortType) => {
        dispatch(changeType(sortType))
    }

    const onChangeSortDirHandler = (sortDir) => {
        dispatch(changeDirection(sortDir))
    }

    const onSubmit = (dataFilter) => {
        dispatch(updateFilters(dataFilter))
    }


    return ( 
        <div>
            <div className="container-fluid bg-color-main mb-5 py-5">
                <h1 className="container text-center">Магазин готовых шаблонов</h1>
            </div>

            <div className="container">
                <div className="row row-cols-2">
                    <div className="col-3">
                        <FilterPanel config={filters} onChange={onSubmit} />
                    </div>
                    <div className='col-9'>
                        <div css={sortWrapperStyle}>
                            <Typography variant="h3" css={titleFilterCost}>Сортувати:</Typography>
                            <SortItems 
                                optionsType={SORT_TYPE} 
                                optionsDir={SORT_DIR} 
                                // onChangeType={onClickSortTypeHandler} 
                                // onChangeDir={onChangeSortDirHandler} 
                                onClick={onClickSortTypeHandler} 
                                onChange={onChangeSortDirHandler} 
                                // selectedSortType={sorts.sortType} 
                                // selectedSortDir={SORT_DIR[0].value}
                                selectedSortType={sortsMas.sortType} 
                                selectedSortDir={sortsMas.sortDir}
                                // sortOptions={sortsMas}
                            />
                        </div>
                        <div>
                            <Catalog />
                        </div>     
                    </div>                       
                </div>
            </div>           
        </div>
    )
}