import ButtonsShowCard from "./ButtonsShowCard"
import { CATALOG_GOODS } from "../../constants"

export const CatalogCards = () => {
    return ( 
        <>
            <ul className="catalog-list">
            
                {CATALOG_GOODS.map(({ title, srcLogo, alt, descName, descInfo, descAriaLabel, descPrice }, index) => 

                <li key={index} className="catalog-item">
                    <div className="catalog-slider">
                        <div className="circle"></div>
                    </div>
                    <div className="catalog-img">
                        <h3 className="visually-hidden">{title}</h3>
                        <img
                            src={srcLogo}
                            width="358"
                            height="578"
                            alt={alt}
                        />
                    </div>
                    <div className="catalog-item-description">
                        <h3>
                            <a href="!#" aria-label="открыть окно с демонстрацией сайта"
                            >{descName}</a>
                        </h3>
                        <p>{descInfo}</p>
                        <button
                            className="btn btn-catalog-item"
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
 