/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PaginationList } from './PaginationList';
import { CardItem } from './CardItem';
// import { CATALOG_GOODS } from "../../constants";
import { selectGoods } from '../../store/slices/goodsSlice';
import { useSelector } from 'react-redux';


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

    const goods = useSelector(selectGoods);

    return ( 
        <>
            {/* <div css={cardWrapper}>
                {CATALOG_GOODS.map((item) =>
                    <CardItem key={item.title} options={item}/>
                )}
            </div> */}
            <div css={cardWrapper}>
                {goods.map((item) =>
                    <CardItem key={item.title} options={item}/>
                )}
            </div>
           
            <PaginationList />
        </>
    )
}