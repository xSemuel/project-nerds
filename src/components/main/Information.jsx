import nerdsIllustration from '../../images/nerds-illustration.png';

export const Information = () => {
    return ( 
        <div className="container text-center">   
            <div className="row">
                <div className="col-8 text-start">
                    <h2 className="visually-hidden">Информация о студии</h2>
                    <h3 className="">Мы — маленькая, но гордая<br />дизайн-студия из Краснодара.</h3>
                    <p className="">Исповедуем принципы минимализма и чистоты. Ставим математический расчет<br /> превыше креатива. Работаем не покладая рук, как роботы.</p>
                    <h4>Выполняем заказы на разработку:</h4>
                    <p>	Веб-сайтов любой сложности<br />  Мобильных приложений для iOS и Android<br /> Слайдшоу и видео для корпоративных презентаций</p>
                </div>
            
                <div className="col-4">
                    <a href="!#"><img className="pb-3" src={nerdsIllustration} width="360" heigth="280"  alt="Nerds-illustration" /></a>
                    <h5 className='pb-3'>с 2004 года Любим точность во всем:</h5>
                    <ul className="row p-0">
                        <li className="col-4">
                        <p className="text-end mb-0">%</p>
                        <p>146</p>
                        <p className="text-start">Уровень<br />самоотдачи</p>
                        </li>
                        <li className="col-4">
                        <p className="text-end mb-0">%</p>
                        <p>100</p>
                        <p className="text-start">Соблюдение<br />сроков</p>
                        </li>
                        <li className="col-4">
                        <p className="text-end mb-0">%</p>
                        <p>50</p>
                        <p className="text-start">Минимальная<br />предоплата</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    )
}
