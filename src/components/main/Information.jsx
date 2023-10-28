import nerdsIllustration from '../../images/nerds-illustration.png';

export const Information = () => {
    return ( 
        <div className="container text-center">   
            <div className="row">
                <div className="col-8 text-start">
                    <h2 className="visually-hidden">Інформація про студію</h2>
                    <h3 className="">Ми — маленька, але горда<br />дизайн-студія з Уганди.</h3>
                    <p className="">Дотримуємось принципів мінімалізму та чистоти. Ставимо математичний розрахунок<br /> вище креативу. Працюємо не покладаючи рук, як роботи.</p>
                    <h4>Виконуємо замовлення на разробку:</h4>
                    <p>	Веб-сайтів будь-якої складності<br />  Мобільних додатків для iOS та Android<br /> Слайдшоу та відео для корпоративних презентацій</p>
                </div>
            
                <div className="col-4">
                    <a href="!#"><img className="pb-3" src={nerdsIllustration} width="360" heigth="280"  alt="Nerds-illustration" /></a>
                    <h5 className='pb-3'>з 2004 року Любимо точність у всьому:</h5>
                    <ul className="row p-0">
                        <li className="col-4">
                        <p className="text-end mb-0">%</p>
                        <p>146</p>
                        <p className="text-start">Рівень<br />самовіддачі</p>
                        </li>
                        <li className="col-4">
                        <p className="text-end mb-0">%</p>
                        <p>100</p>
                        <p className="text-start">Збереження<br />термінів</p>
                        </li>
                        <li className="col-4">
                        <p className="text-end mb-0">%</p>
                        <p>50</p>
                        <p className="text-start">Мінімальна<br />передплата</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    )
}
