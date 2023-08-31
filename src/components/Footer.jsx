


export const Footer = () => {
    return ( 
        <div className="container-fluid bg-color-main">
            <div className="container" style={{height: '12rem'}}>
                <h2 className="visually-hidden">Социальные сети</h2>  
                <div className="d-flex gap-5">          
                    <ul className="d-flex">
                        <li>
                        <a className="btn-social btn-vk" href="!#" >
                            <img
                            src="img/vk-icon.svg"
                            width="27"
                            height="15"
                            alt="Иконка В контакте"
                            />
                        </a>
                        </li>
                        <li>
                        <a className="btn-social btn-fb" href="!#" >
                            <img
                            src="img/fb-icon.svg"
                            width="12"
                            height="22"
                            alt="Иконка Фейсбук"
                            />
                        </a>
                        </li>
                        <li>
                        <a className="btn-social btn-insta" href="!#" >
                            <img
                            src="img/insta-icon.svg"
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
    );
}
 
