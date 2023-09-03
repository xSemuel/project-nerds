import { NavLink } from "react-router-dom";
import { PARTNERS_BLOCK } from '../../constants';

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
