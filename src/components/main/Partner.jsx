import { NavLink } from "react-router-dom";
import htmlPartner from '../../images/html-academy.svg';
import barberPartner from '../../images/barber-shop.svg';
import pinkPartner from '../../images/pink.svg';
import mishkaPartner from '../../images/mishka.svg';

const PARTNERS_BLOCK = [
  { logo: htmlPartner, alt: 'Логотип «html academy»', link: '!#' },
  { logo: barberPartner, alt: 'Логотип Барбершоп «Бородинский»', link: '!#' },
  { logo: pinkPartner, alt: 'Логотип PINK', link: '!#' },
  { logo: mishkaPartner, alt: 'Логотип MISHKA', link: '!#' },
]

export const Partner = () => {
    return ( 
      <div className="container">
        <h2 className="visually-hidden">Партнеры</h2>
          <ul className="d-flex justify-content-around align-items-center p-0">
            
            {PARTNERS_BLOCK.map(({ logo, alt, link }, index) =>   
              <li key={index} className="partners-item">
                <NavLink to={link} target="_blank">
                  <img
                    src={logo}
                    width="199"
                    height="68"
                    alt={alt}
                  />
                </NavLink>
              </li>
            )}

          </ul>
      </div>
    )
}
