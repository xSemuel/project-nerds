import { NavLink } from "react-router-dom";
import { SOCIAL_ICONS } from "../constants";


export const Footer = () => {
    return ( 
        <div className="container-fluid bg-color-main">
            <div className="container d-flex align-self-center" style={{height: '12rem'}}>
                <h2 className="visually-hidden">Соціальні мережі</h2>  
                <div className="d-flex gap-5 align-items-center mx-0">          
                    <ul className="d-flex gap-1">

                        {SOCIAL_ICONS.map(({ logo, alt, link, width, height, classIcon }, index) =>
                            <li key={index}>
                            <NavLink className="btn-social" to={link} >
                                <img
                                src={logo}
                                width={width}
                                height={height}
                                alt={alt}
                                />
                            </NavLink>
                            </li>

                        )}

                    </ul>

                    <div className="social-inner">
                        <p className="social-slogan">Давайте товаришувати, це вигідно!</p>
                        <p className="social-text">
                            Знижка 10% для друзів з соціальних мереж.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
