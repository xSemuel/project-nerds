import { NavLink } from 'react-router-dom';
import { CAROUSEL_BLOCK } from '../../constants';

export const Slider = () => {
    return ( 
        <div className="container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                {CAROUSEL_BLOCK.map(({ id, title, img, info, alt, btnInfo, btnColor, link}) => 
                    <>                 
                    <div key={id} className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={id} className="active" aria-current="true" aria-label={id}></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img} className="d-block w-100" alt={alt} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{title}</h5>
                                <p>{info}</p>
                                <NavLink><button>{btnInfo}</button>{link}</NavLink>
                            </div>
                        </div>
                    </div>
                    </> 
                )}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>                   
            </div>
        </div>
    )
}
