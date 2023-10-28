/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@mui/material';

    const buttonStyles = css`  
        width: 260px;
        height: 52px;
        margin: 0 auto;
        margin-bottom: 30px;
        background: #eee;
        color: #000;
        fontSize: 16px;
        fontWeight: 500;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
        transition: .3s ease-in;
        &:hover {
            background: #d7373b;
            color: #ffffff;
        }
    `

export const Mapcontact = () => {

    return ( 
        <>
            <div className="container-fluid p-0">
                <h2 className="visually-hidden">Як нас знайти</h2>
                <div className="wrap-map">
                    <div className="ratio ratio-21x9 p-0" style={{height: '416px'}}>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.603625300316!2d30.320858716173465!3d59.93871916905408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1613493564716!5m2!1sru!2sru"
                        height="416"
                        style={{border: 0}}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Офіс компанії за адресою вул. Велика Конюшенна 19/8, Уганда"
                        />
                    </div>

                    <div className="contacts-inner container-writeus">
                        <div className="contacts-adress">
                        <p className="adress-title">NЁRDS DESIGN STUDIO</p>
                        <p className="adress-text">
                            191186, Уганда,<br />
                            вул. В. Конюшенна, д. 19/8<br />
                        </p>
                        <p className="tel-text">
                            тел.
                            <a className="footer-phone" href="tel:+7845454354557575">
                                +4 (764) 564-64-65
                            </a>
                        </p>
                        <Button css={buttonStyles} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Відправити
                        </Button>
                    </div>
                       
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-content-user">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">Напишіть нам</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" ></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-2 needs-validation" noValidate>
                                <div className="col-4 position-relative">
                                    <label htmlFor="validationTooltip01" className="form-label">Ваше ім'я:</label>
                                    <input type="text" className="form-control" id="validationTooltip01" defaultValue="Ім'я Прізвище" required />
                                </div>
                                <div className="col-4 position-relative">
                                    <label htmlFor="validationTooltip02" className="form-label">Ваш email:</label>
                                    <input type="email" className="form-control" id="validationTooltip02" defaultValue="email@example.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Пример текстового поля</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </form>    
                        </div>
                        <div className="d-flex p-3">
                            <Button css={buttonStyles}>
                                Відправити
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
