/** @jsxImportSource @emotion/react */
import { SortItems, Catalog } from '../../components';
import { Typography } from '@mui/material';
import { css } from '@emotion/react';
import { SORT_TYPE, SORT_DIR } from '../../constants';
import { FilterPanel } from '../../features';
import { useSelector, useDispatch } from 'react-redux';
import { selectedFilters } from '../../store/slices/filtersParamsSlice';
import { selectedSort } from '../../store/slices/searchParamsSlice';
import { changeDirection, changeType } from '../../store/slices/searchParamsSlice';
import { updateFilter } from '../../store/slices/filtersParamsSlice';


const sortWrapper = css`
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
    // 2 useSelectors
    const dispatch = useDispatch();
    const filtersMas = useSelector(selectedFilters);
    const sortsMas = useSelector(selectedSort);

    console.log(filtersMas)
    console.log(sortsMas)


    // const [sorts, setSorts] = useState({
    //     sortType: SORT_TYPE[0].value,
    //     sortDir: SORT_DIR[0].value,      
    // })

    const onClickSortTypeHandler = (sortType) => {
        dispatch(changeType(sortType))
        // setSorts((prevState) => ({ ...prevState, sortType }))
    }

    const onChangeSortDirHandler = (sortDir) => {
        dispatch(changeDirection(sortDir))
        // setSorts((prevState) => ({ ...prevState, sortDir }))
    }

    const onSubmit = (dataFilter) => {
        const { sliderFilter, networkFilter, featuresFilter } = dataFilter
        dispatch(updateFilter({key: 'price', value: sliderFilter}))
        dispatch(updateFilter({key: 'layout', value: networkFilter}))
        dispatch(updateFilter({key: 'features', value: featuresFilter}))
    }


    return ( 
        <div>
            <div className="container-fluid bg-color-main mb-5 py-5">
                <h1 className="container text-center">Магазин готовых шаблонов</h1>
            </div>

            <div className="container">
                <div className="row row-cols-2">
                    <div className="col-3">
                        <FilterPanel options={onSubmit}/>
                    </div>
                    <div className='col-9'>
                        <div css={sortWrapper}>
                            <Typography variant="h3" css={titleFilterCost}>Сортувати:</Typography>
                            <SortItems 
                                optionsType={SORT_TYPE} 
                                optionsDir={SORT_DIR} 
                                onClick={onClickSortTypeHandler} 
                                onChange={onChangeSortDirHandler} 
                                // selectedSortType={sorts.sortType} 
                                // selectedSortDir={SORT_DIR[0].value}
                                selectedSortType={sortsMas.sortType} 
                                selectedSortDir={sortsMas.sortDir}
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