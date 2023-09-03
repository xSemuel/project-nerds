import { NavLink } from "react-router-dom";
import { ADVANTAGE_BLOCK } from '../../constants';

export const Advantage = () => {
    return ( 
        <div className="container mt-5 d-flex justify-content-between">
            
            {ADVANTAGE_BLOCK.map(({ title, img, info, alt, btnInfo, btnColor, link }, index) => 
                <div key={index} className="card" style={{width: '18.75rem', height: '21.87rem'}}>           
                    <img src={img} className="card-img-top mb-4" alt={alt} height= '146px' width='300px' />
                    <div className="card-body">
                        <h3 className="card-title mb-3">{title}</h3>
                        <p className="card-text mb-4">{info}</p>
                        <NavLink to={link} className="btn btn-primary" style={{backgroundColor: btnColor}}>{btnInfo}</NavLink>
                    </div>
                </div>
            )}

        </div>

    )
}
