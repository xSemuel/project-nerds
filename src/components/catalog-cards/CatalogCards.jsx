/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ButtonsShowCard from "./ButtonsShowCard"
import { CATALOG_GOODS } from "../../constants"

    const catalogList = css`
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 23px;
    `
    const catalogItem = css`
        width: 360px;
        height: 620px;
        margin-right: 40px;
        margin-bottom: 30px;
        position: relative;
        border-radius: 0 0 5px 5px;
        cursor: pointer;
        &:nth-child(2n) {
            margin-right: 0;
        }
        &:hover {
            box-shadow: 0px 6px 15px rgba(0, 0, 0), 0.25);
            opacity: 1;
            display: block;
        }
    `
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
    const catalogImg = css `
        width: 358px;
        height: 578px;
        border: 1px solid rgba( 0, 0, 0), 0.1);
        border-radius: 0 0 5px 5px;
    `

    const itemImg = css `
        width: 358px;
        height: 578px;
        border-radius: 0 0 5px 5px;
    `

    const catalogItemDescription = css `
        width: 360px;
        min-height: 231px;
        padding: 26px 52px 44px 52px;
        border-radius: 0 0 5px 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        background-color: #eeeeee;
        display: none;
        overflow: hidden;
        &:hover {
            display: block;
        }
    `
    const catalogItemDescriptionTitle = css `
        margin: 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 12px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    `
    const catalogItemDescriptionLink = css `
        &:hover {
            color: #fb565a;
        }
        &:active {
            color: #000000;
            opacity: 0.3;
        }
    `
    const catalogItemDescriptionContent = css `
        line-height: 18px;
        text-align: center;
        color: #666666;
        margin: 0;
        margin-bottom: 32px;
        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
            <ul css={catalogList}>
            
                {CATALOG_GOODS.map(({ title, srcLogo, alt, descName, descInfo, descAriaLabel, descPrice }, index) => 

                <li key={index} css={catalogItem}>
                    <div css={catalogSlider}>
                        <div css={circle}></div>
                    </div>
                    <div className={catalogImg}>
                        <h3 className="visually-hidden">{title}</h3>
                        <img css={itemImg}
                            src={srcLogo}
                            width="358"
                            height="578"
                            alt={alt}
                        />
                    </div>
                    <div css={catalogItemDescription}>
                        <h3 css={catalogItemDescriptionTitle}>
                            <a css={catalogItemDescriptionLink} href="!#" aria-label="открыть окно с демонстрацией сайта"
                            >{descName}</a>
                        </h3>
                        <p css={catalogItemDescriptionContent}>{descInfo}</p>
                        <button
                            className="btn"
                            css={btnCatalogItem}
                            type="button"
                            aria-label={descAriaLabel}
                        >
                            {descPrice} <span>&!#8381;</span>
                        </button>
                    </div>
                </li>
                )},
            </ul>
            <ButtonsShowCard />
        </>
    )
}
 