/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { SortItems } from '../../components';
import { Typography } from '@mui/material';
import { css } from '@emotion/react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FilterPanel } from '../../features'


const SORT_TYPE = [
    {text: 'По ціні', value: 'forPrice'},
    {text: 'По типу', value: 'forType'},
    {text: 'По назві', value: 'forName'},
]

const SORT_DIR = [
    {text: 'Значок зростання', value: 'ascending', icon: <ArrowDropUpIcon sx={{ color: '#e1e1e1'}} />, checkedIcon: <ArrowDropUpIcon sx={{color: '#d7373b'}} />},
    {text: 'Значок спадання', value: 'descending', icon: <ArrowDropDownIcon sx={{ color: '#e1e1e1'}} />, checkedIcon: <ArrowDropDownIcon sx={{color: '#d7373b'}} /> },
]

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

    const [sorts, setSorts] = useState({
        sortType: SORT_TYPE[0].value,
        sortDir: SORT_DIR[0].value,      
    })

    const onClickSortTypeHandler = (sortType) => {
        setSorts((prevState) => ({ ...prevState, sortType }))
    }

    const onChangeIconSortHandler = (sortDir) => {
        setSorts((prevState) => ({ ...prevState, sortDir }))
    }

    console.log(sorts)

    return ( 
        <div>
            <div className="container-fluid bg-color-main mb-5 py-5">
                <h1 className="container text-center">Магазин готовых шаблонов</h1>
            </div>

            <div className="container">
                <div className="row row-cols-2">
                    <div className="col-3">
                        <FilterPanel />
                    </div>
                    <div className='col-9'>
                        <div css={sortWrapper}>
                            <Typography variant="h3" css={titleFilterCost}>Сортувати:</Typography>
                            <SortItems 
                                optionsType={SORT_TYPE} 
                                optionsDir={SORT_DIR} 
                                onClick={onClickSortTypeHandler} 
                                onChange={onChangeIconSortHandler} 
                                selectedSortType={sorts.sortType} 
                                selectedSortDir={SORT_DIR[0].value}
                            />
                        </div>

                        <div>
                            <h1>Карточки товаров</h1>
                        </div>     
                    </div>                       
                </div>
            </div>           
        </div>
    )
}