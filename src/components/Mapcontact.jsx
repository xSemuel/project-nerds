/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { ModalWindow } from '../utils';

import mapMarker from '../images/map-marker.png'

    const mapContactWrapper = css`
        position: relative;
        max-width: 100%;
        padding-left: 0px;
        padding-right: 0px;
        &.MuiContainer-root {
            @media (min-width: 1200px) {
                max-width: 100%;
            }
            @media (min-width: 600px) {
                padding-left: 0px;
                padding-right: 0px;
            }
        }

    `
    const mapWrapper = css`
        position: relative;
        height: 416px;
        width: 100%;
    `
    const writeUsWrapper = css`
        width: 319px;
        height: 308px;
        background-color: #FFF;
        position: absolute;
        bottom: 54px;
        top: 54px;
        left: 34px;
    `
    const writeUsInfoWrapper = css`
        padding: 50px;    
    `
    const writeUsTitle = css`
        color: #000;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        text-transform: uppercase;
    `
    const writeUsInfo = css`
        margin-top: 23px;
        color: #666;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
    `
    const writeUsTel = css`
        margin-top: 15px;
        color: #666;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
    `
    const writeUsNavLink = css`
        text-decoration: none;
    `
    const buttonStyles = css` 
        margin-top: 37px;
        width: 219px;
        height: 50px;
        background: #FB565A;
        border-radius: 3px;
        color: #FFF;
        text-align: center;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        text-transform: uppercase;
        transition: .3s ease-in;
        &:hover {
            background: #d7373b;
            color: #ffffff;
        }
    `
    const mapMarkerStyle = css`
        width: 231px;
        height: 190px;
        position: absolute;
        bottom: 151px;
        top: 75px;
        left: 806px;
    `

export const Mapcontact = () => {

    const [openModalWindow, setOpenModalWindow] = useState(false);

    const funcOpenModalWindow = () => {
        setOpenModalWindow(true)
    }

    return ( 
        <Container css={mapContactWrapper}>
            <Box css={mapWrapper}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.603625300316!2d30.320858716173465!3d59.93871916905408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1613493564716!5m2!1sru!2sru"
                    height="416"
                    width='100%'
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Офіс компанії за адресою вул. Велика Конюшенна 19/8, Уганда"
                />
            </Box>

            <Box css={writeUsWrapper}>
                <Box css={writeUsInfoWrapper}>
                    <Typography css={writeUsTitle}>NЁRDS DESIGN STUDIO</Typography>
                    <Typography css={writeUsInfo}>
                        191186, Уганда,<br />
                        вул. В. Конюшенна, д. 19/8<br />
                    </Typography>
                    <Typography css={writeUsTel}>
                        тел.
                        <NavLink 
                            css={writeUsNavLink}
                            to="tel:+179901234567"
                        >
                            +1 (7990) 123-45-67
                        </NavLink>
                    </Typography>
                    <Button 
                        css={buttonStyles}
                        onClick={funcOpenModalWindow}
                    >
                        Написати нам
                    </Button>
                </Box>
            </Box>

            <Box>
                <Box 
                    css={mapMarkerStyle}
                    component="img"
                    src={mapMarker}
                    alt='map marker'
                /> 
            </Box>

            <ModalWindow buttonOpenWindow={openModalWindow}/>

        </Container>
    )
}

               