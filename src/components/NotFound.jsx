import notFound from '../images/404NotFound.png';

export const NotFound = () => {
    return ( 
        <div className='container mt-5'>
            <h1> Помилка 404. Сторінка на яку Ви посилаєтесь не знайдено!</h1>
            <div>
                <img className='' src={notFound} alt="Сторінка не знайдена" />
            </div>
        </div>
    );
}