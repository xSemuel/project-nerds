/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { PaginationList } from './PaginationList';
import { CardItem } from './CardItem';

import { useSelector, useDispatch } from 'react-redux';
import { selectedGoods, addIdToCart, totalPagesCount, goodsForCurrentPage, pageGoodsSlice, updateGoodsPage } from '../../store/slices';
import { toogleSnakebar, updateSnakebar, resetFilters } from '../../store/slices';

import { Box, Typography, Button } from '@mui/material';

import noFindedGoods from './img/findGoods.png';

    const catalogContentWrapper = css`
        display: flex;
        flex-direction: column;
    `
    const cardWrapper = css `
        min-height: calc(100vh - 100px);
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
    const buttonStyles = css`  
        width: 260px;
        height: 52px;
        margin: 0 auto;
        margin-bottom: 30px;
        background: #eee;
        color: #000;
        fontSize: 16px;
        fontWeight: 500;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
        transition: .3s ease-in;
        &:hover {
            background: #d7373b;
            color: #ffffff;
        }
    `

export const Catalog = () => {

    const dispatch = useDispatch();

    const goods = useSelector(selectedGoods);
    const objectPagePagination = useSelector(pageGoodsSlice);
    const showGoodsCurrentPage = useSelector(goodsForCurrentPage);
    const totalPagesCountPagination = useSelector(totalPagesCount);
    
    console.log(objectPagePagination)

    const handleChangePagination = (event, value) => {
        const calcOffset = (value - 1) * objectPagePagination.limit;
        dispatch(updateGoodsPage({
            limit: 4,
            offset: calcOffset,
            currentPage: value,
        }))
    }

    console.log(showGoodsCurrentPage)
    
    const handleCartAdd = (siteId) => {
        dispatch(addIdToCart(siteId))

        dispatch(updateSnakebar({
            severity: "success",
            message: 'Товар успішно доданий в корзину!',
            autoHideDuration: 6000,
        }))
        dispatch(toogleSnakebar(true)) 
    }

    const resetFiltersSearch = () => {
        dispatch(resetFilters())
    }

    return ( 
        <Box css={catalogContentWrapper}>
            {goods.length !== 0 ?
                <Box>
                    <Box css={cardWrapper}>

                        {showGoodsCurrentPage.map((item) =>
                            <CardItem
                                key={item.title}
                                options={item}
                                handleGoodCartAdd={() => handleCartAdd(item.id)}
                            />
                        )}
                    </Box> 
                    <PaginationList funcChangePagination={handleChangePagination} currentPage={objectPagePagination.currentPage}  numberPage={totalPagesCountPagination}/>
                </Box>:
                <Box css={wrapperNoFindedGoods}>
                    <Box 
                        component="img" 
                        css={imgGoodsEmpty} 
                        src={noFindedGoods} 
                        alt="Not goods for filtration"
                    />
                    <Typography css={styleGoodsListEmpty} variant="h4">
                        Жоден товар не відповідає вибраним критеріям, будь ласка змініть параметри пошуку.
                    </Typography>
                    <Button css={buttonStyles} onClick={resetFiltersSearch}>
                        Скинути налаштування
                    </Button>
                </Box>
            }
        </Box>
    )
}
