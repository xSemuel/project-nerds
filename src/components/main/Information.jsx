import nerdsIllustration from '../../images/nerds-illustration.png';


export const Information = () => {
    return ( 
        <div className="container">   
            <div className="">
                <h2 className="visually-hidden">Информация о студии</h2>
                <p className="">Мы — маленькая, но гордая<br />дизайн-студия из Краснодара.</p>
                <p className="">Исповедуем принципы минимализма и чистоты. Ставим математический расчет<br /> превыше креатива. Работаем не покладая рук, как роботы.</p>
                <p>Выполняем заказы на разработку:</p>
                <p>	Веб-сайтов любой сложности<br />  Мобильных приложений для iOS и Android<br /> Слайдшоу и видео для корпоративных презентаций</p>
            </div>
            <div className="">
                <a href="!#"><img src={nerdsIllustration} width="360" heigth="280"  alt="Nerds-illustration" /></a>
                <h2>с 2004 года Любим точность во всем:</h2>
                <ul className="">
                    <li className="">
                    <p>146%</p>
                    <p className="">Уровень<br />самоотдачи</p>
                    </li>
                    <li className="">
                    <p>100%</p>
                    <p className="">Соблюдение<br />сроков</p>
                    </li>
                    <li className="">
                    <p>50%</p>
                    <p className="">Минимальная<br />предоплата</p>
                    </li>
                </ul>
            </div>
        </div> 
    )
}
