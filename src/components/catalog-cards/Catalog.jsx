/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PaginationList } from './PaginationList';
import { CardItem } from './CardItem';
import { CATALOG_GOODS } from "../../constants";


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
    return ( 
        <>
            <div css={cardWrapper}>
                {CATALOG_GOODS.map((item) =>
                    <CardItem key={item.title} options={item}/>
                )}
            </div>
           
            <PaginationList />
        </>
    )
}