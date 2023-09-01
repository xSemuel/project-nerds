import { useState } from 'react';

export const Mapcontact = () => {

    const [toogleMoodal, setToogleModal] = useState(false);

    const openModalWindow = (event) => {
        event.preventDefault();
        setToogleModal(true);

    }

    return ( 
        <>
            <div className="container-fluid p-0">
                <h2 className="visually-hidden">Как нас найти</h2>
                <div className="wrap-map">
                    <div className="ratio ratio-21x9 p-0" style={{height: '416px'}}>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.603625300316!2d30.320858716173465!3d59.93871916905408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1613493564716!5m2!1sru!2sru"
                        height="416"
                        style={{border: 0}}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Офис компании по адресу ул. Большая Конюшенная 19/8, Санкт-Петербург"
                        ></iframe>
                    </div>

                    <div className="contacts-inner container">
                        <div className="contacts-adress">
                        <p className="adress-title">NЁRDS DESIGN STUDIO</p>
                        <p className="adress-text">
                            191186, Санкт-Петербург,<br />
                            ул. Б. Конюшенная, д. 19/8<br />
                        </p>
                        <p className="tel-text">
                            тел.
                            <a className="footer-phone" href="tel:+78122757575"
                            >+7 (812) 275-75-75</a
                            >
                        </p>
                        <a href="writeus.html">Напишите нам</a>
                        </div>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={openModalWindow}>
                            Напишите нам
                        </button>
                    </div>

                   {toogleMoodal && <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Заголовок модального окна</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                    <button type="button" className="btn btn-primary">Сохранить изменения</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}
