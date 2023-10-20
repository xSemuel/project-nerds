import { Advantage, Carousel, Information, Partner } from '../main';

export const Home = () => {
    return ( 
    <>    
        <Carousel />
        <Advantage />  
        <div className="container my-5">
            <hr className="hrDevided m-0"/>
        </div>
        <Information />
        <div className="container my-5">
            <hr className="hrDevided m-0"/>
        </div>
        <Partner />
        <div className="container my-5">
            <hr className="hrDevided m-0"/>
        </div>
        
    </>

);
}
