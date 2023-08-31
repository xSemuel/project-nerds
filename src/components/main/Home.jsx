import { Header } from '../../components'
import { Advantage, Slider, Information } from '../main';


export const Home = () => {
    return ( 
    <>
        <Header />    
        <Slider />
        <Advantage />  
        <div className="container my-5">
            <hr className="hrDevided m-0"/>
        </div>
        <Information />
        <div className="container my-5">
            <hr className="hrDevided m-0"/>
        </div>
        <div className="container my-5">
            <hr className="hrDevided m-0"/>
        </div>
    </>

);
}
