import htmlPartner from '../../images/html-academy.svg';
import barberPartner from '../../images/barber-shop.svg';
import pinkPartner from '../../images/pink.svg';
import mishkaPartner from '../../images/mishka.svg';


export const Partner = () => {
    return ( 
        <section className="container">
          <h2 className="visually-hidden">Партнеры</h2>
          <ul className="partners-list">
            <li className="partners-item">
              <a href="!#" target="_blank">
                <img
                  src={htmlPartner}
                  width="199"
                  height="68"
                  alt="Логотип «html academy»"
                />
              </a>
            </li>
            <li className="partners-item">
              <a href="!#">
                <img
                  src={barberPartner}
                  width="209"
                  height="90"
                  alt="Логотип Барбершоп «Бородинский»"
                />
              </a>
            </li>
            <li className="partners-item">
              <a href="!#">
                <img
                  src={pinkPartner}
                  width="185"
                  height="52"
                  alt="Логотип PINK"
                />
              </a>
            </li>
            <li className="partners-item">
              <a href="!#">
                <img
                  src={mishkaPartner}
                  width="173"
                  height="84"
                  alt="Логотип MISHKA"
                />
              </a>
            </li>
          </ul>
        </section>
    )
}
