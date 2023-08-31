import advantage1 from '../../images/illustration_1.jpg';
import advantage2 from '../../images/illustration_2.jpg';
import advantage3 from '../../images/illustration_3.jpg';

export const Advantage = () => {
    return ( 
        <div className="container mt-5 d-flex justify-content-between">
            <div className="card" style={{width: '18.75rem', height: '21.87rem'}}>
                <img src={advantage1} className="card-img-top mb-4" alt="..." height= '146px' width='300px' />
                <div clasName="card-body">
                    <h3 className="card-title mb-3">Веб-сайты</h3>
                    <p className="card-text mb-4">Мир никогда не будет прежним после того как увидит ваш сайт!</p>
                    <a href="!#" className="btn btn-primary">УЗНАТЬ БОЛЬШЕ</a>
                </div>
            </div>
            <div className="card" style={{width: '18.75rem', height: '21.87rem'}}>
                <img src={advantage2} className="card-img-top mb-4" alt="..." />
                <div clasName="card-body">
                    <h3 className="card-title mb-3">Приложения</h3>
                    <p className="card-text mb-4">Покорите топ-10 приложений в AppStore и Google Play</p>
                    <a href="!#" className="btn btn-primary">УЗНАТЬ БОЛЬШЕ</a>
                </div>
            </div>
            <div className="card" style={{width: '18.75rem', height: '21.87rem'}}>
                <img src={advantage3} className="card-img-top mb-4" alt="..." />
                <div clasName="card-body">
                    <h3 className="card-title mb-3">Презентации</h3>
                    <p className="card-text mb-4">Вы даже не подозреваете, насколько вы изумительны!</p>
                    <a href="!#" className="btn btn-primary">УЗНАТЬ БОЛЬШЕ</a>
                </div>
            </div>
        </div>
    )
}
