/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

import { PaginationList } from './PaginationList';
import { CardItem } from './CardItem';

import { useSelector, useDispatch } from 'react-redux';
import { selectedGoods, addIdToCart } from '../../store/slices';
import { toogleSnakebar, updateSnakebar } from '../../store/slices';

import { Box, Typography } from '@mui/material';

import noFindedGoods from './img/findGoods.png';

    const catalogContentWrapper = css`
        display: flex;
        flex-direction: column;
    `
    const cardWrapper = css `
        height: calc(100% - 100px);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 40px;
        row-gap: 30px;
        .list-reset();
        margin-top: 32px;
        margin-bottom: 58px;  
    `
    const wrapperNoFindedGoods = css`
        margin: 50px auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `
    const styleGoodsListEmpty = css`
        font-weight: bold;
        margin-top: 40px;
        text-align: center;
    `
    const imgGoodsEmpty = css`
        margin: 0 auto;
        height: 350px;
        width: 350px;
    `

export const Catalog = () => {

    const dispatch = useDispatch();
    const goods = useSelector(selectedGoods); // TODO: update selector
    const [pagePaginationCurrent, setPagePaginationCurrent] = useState(1); // TODO: move to redux goods slice
    const handleChangePagination = (event, value) => {
        setPagePaginationCurrent(value);
    }

    console.log(goods.length)
    
    // TODO: move to selector (create new in goodsSelector file)
    const totalCountPagePagination = (goods) => {
        const totalCountGoods = goods.length
        const numberGoodsInPage = 4 // limit
        return Math.ceil(totalCountGoods/numberGoodsInPage)   
    }

    const handleCartAdd = (siteId) => {
        dispatch(addIdToCart(siteId))

        dispatch(updateSnakebar({
            severity: "success",
            message: 'Товар успішно доданий в корзину!',
            autoHideDuration: 6000,
        }))
        dispatch(toogleSnakebar(true))
        
        
    }


    // TODO { limit: 4, offset: 8 }
    // { limit: 4, offset: 0 } [1,2,3,4,5,6,7,8,9,0] // [1,2,3,4]
    // { limit: 4, offset: 8 } [1,2,3,4,5,6,7,8,9,0] // [9,0]

const filteredItems = goods.slice((pagePaginationCurrent-1) * 4, (pagePaginationCurrent-1) * 4 + 4)

    return ( 
        <Box css={catalogContentWrapper}>
            {goods.length !== 0 ?
                <Box>
                    <Box css={cardWrapper}>  {/* TODO 100% - 100px */}

                        {filteredItems.map((item) =>
                            <CardItem
                                key={item.title}
                                options={item}
                                handleGoodCartAdd={() => handleCartAdd(item.id)}
                            />
                        )}
                    </Box> 
                    <PaginationList funcChangePagination={handleChangePagination} currentPage={pagePaginationCurrent}  numberPage={totalCountPagePagination(goods)}/>
                </Box>:
                <Box css={wrapperNoFindedGoods}>
                    <img css={imgGoodsEmpty} src={noFindedGoods} alt="Not goods for filtration"/>
                    <Typography css={styleGoodsListEmpty} variant="h4">
                        Жоден товар не відповідає вибраним критеріям, будь ласка змініть параметри пошуку.
                    </Typography>
                </Box>
            }
        </Box>
    )
}