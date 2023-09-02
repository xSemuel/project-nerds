import iconInst from '../images/insta-icon.svg';
import iconFB from '../images/fb-icon.png';
import iconVK from '../images/vk-icon.svg';

export const Footer = () => {
    return ( 
        <div className="container-fluid bg-color-main">
            <div className="container d-flex align-self-center" style={{height: '12rem'}}>
                <h2 className="visually-hidden">Социальные сети</h2>  
                <div className="d-flex gap-5 align-items-center mx-0">          
                    <ul className="d-flex gap-1">
                        <li>
                        <a className="btn-social btn-vk" href="!#" >
                            <img
                            src={iconVK}
                            width="27"
                            height="15"
                            alt="Иконка В контакте"
                            />
                        </a>
                        </li>
                        <li>
                        <a className="btn-social btn-fb" href="!#" >
                            <img
                            src={iconFB}
                            width="12"
                            height="22"
                            alt="Иконка Фейсбук"
                            />
                        </a>
                        </li>
                        <li>
                        <a className="btn-social btn-insta" href="!#" >
                            <img
                            src={iconInst}
                            width="21"
                            height="21"
                            alt="Иконка Инстаграм"
                            />
                        </a>
                        </li>
                    </ul>
                    <div className="social-inner">
                        <p className="social-slogan">Давайте дружить, это выгодно!</p>
                        <p className="social-text">
                            Скидка 10% для друзей из социальных сетей.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
