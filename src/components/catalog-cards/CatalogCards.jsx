/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ButtonsShowCard } from './ButtonsShowCard';
import { CATALOG_GOODS } from "../../constants"

    const catalogSlider = css`
        width: 360px;
        height: 40px;
        background-color: #4d4d4d;
        opacity: 0.12;
        padding: 13px 284px 13px 16px;
        box-sizing: border-box;
        border: 1px solid #4d4d4d;
        border-radius: 5px 5px 0 0;
        &:hover {
            opacity: 1;
        }
    `
    const circle = css `
        display: inline-block;
        position: relative;
        left: 22px;
        vertical-align: baseline;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: #ffffff;
        &::after {
            content: "";
            position: absolute;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: #ffffff;
            left: 23px;
        }
        &::before {
            content: "";
            position: absolute;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: #ffffff;
            right: 23px;
        }

    `
    const btnCatalogItem  = css `
        display: block;
        width: 200px;
        padding: 17px 72px 15px 72px;
        box-sizing: border-box;
        background-color: #fb565a;
        margin: 0 auto;
        cursor: pointer;
            &:hover {
                background-color: #e74246;
            }
            &:active {
                background-color: #d7373b;
                box-shadow: inset 0px 3px 0px rgba(0, 0, 0, 0.1);
                outline: none;
            }
    `

export const CatalogCards = () => {
    return ( 
        <>
            <ul class="catalog__list">

                {CATALOG_GOODS.map(({ title, srcLogo, alt, descName, descInfo, descAriaLabel, descPrice }, index) => 
                    <li key={title} class="catalog__list-item card-product">
                        <div css={catalogSlider}>
                        <div css={circle}></div>
                    </div>
                    <picture>
                        <img class="card-product__image" src={srcLogo} alt={alt} width="358" height="578" />
                    </picture>

                    <div class="card-product__description">
                        <h3 class="card-product__title">
                        <a class="card-product__link" href="blank.html">{title}</a>
                        </h3>
                        <p class="card-product__text">{descInfo}</p>
                        <button
                            className="btn"
                            css={btnCatalogItem}
                            type="button"
                            aria-label={descAriaLabel}
                        >
                            {descPrice}грн.
                        </button>
                    </div>
                    </li>
                )}

            </ul>

            <ButtonsShowCard />
        </>
    )
}