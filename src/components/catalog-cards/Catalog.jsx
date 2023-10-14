/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PaginationList } from './PaginationList';
import { CardItem } from './CardItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../../store/slices/goodsSlice';
import { addIdToCart } from '../../store/slices';


const cardWrapper = css `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    row-gap: 30px;
    .list-reset();
    margin-top: 32px;
    margin-bottom: 58px;
`

export const Catalog = () => {

    const dispatch = useDispatch();
    const goods = useSelector(selectGoods);


    const handleCartAdd = (siteId) => {
        dispatch(addIdToCart(siteId))
    }

    return ( 
        <>
            <div css={cardWrapper}>
                {goods.map((item) =>
                    <CardItem
                        key={item.title}
                        options={item}
                        handleGoodCartAdd={() => handleCartAdd(item.id)}
                    />
                )}
            </div>
           
            <PaginationList />
        </>
    )
}