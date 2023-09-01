import { Advantage, Slider, Information, Partner } from '../main';

export const Home = () => {
    return ( 
    <>    
        <Slider />
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
