/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useState, useEffect } from 'react';
import { Box, Modal, Button, Typography, Grid, Stack } from '@mui/material';
import closeModalButton from './img/closeModalButton.png';

import { SendDataInEmail } from '../../utils';
import { emailForSend } from './constants';
import { TextInput } from './TextInput';
import { MessageAboutSucces } from './MessageAboutSucces';

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 960,
        height: 590,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const modalWrapper = css`
        padding: 63px 100px 84px 100px;
    `
    const writeUsTitle = css`
        margin-bottom: 37px;
    `
    const modalTitle = css`
        color: #000;
        font-family: Roboto;
        font-size: 45px;
        font-weight: 700;
        line-height: normal;
    `
    const textFieldTitle = css`
        color: #000;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
        margin-bottom: 9px;
    `
    const buttonWrapper = css`
        margin-top: 30px;
    `
    const buttonStyles = css`  
        width: 259px;
        height: 50px;
        margin: 0 auto;

        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;

        text-align: center;
        text-transform: uppercase;

        background: #FB565A;
        border-radius: 3px;
        color: #FFF;
        
        transition: .3s ease-in;
        &:hover {
            background: #d7373b;
            color: #ffffff;
        }
    `
    const modalBtnStyles = css` 
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
    const buttonCloseStyle = css`
        min-width: 0;
        background: none;
        padding: 0;
        &:hover {
            background: none;
        }
    `

export const FeedbackModal = () => {

    const [isOpen, setIsOpen] = useState(true)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [formData, setFormData] = useState({})
    const [isFormValid, setIFormsValid]= useState({})
    const [isSendingCallback, setIsSendingCallback] = useState(false)

    const handleValidation = (filterName, value, isValidTextField) => {
        // console.log(`Input: ${value}, Valid: ${isValidTextField}, id: ${filterName}`);
        setFormData((prevState) => ({ ...prevState, [filterName]: value }))
        setIFormsValid((prevState) => ({ ...prevState, [filterName]: isValidTextField }))
    };

    useEffect(() => {
        const validateForSend = Object.values(isFormValid).every(item => item !== true && item !== '') && Object.values(isFormValid).length === 3
        validateForSend ? setIsButtonDisabled(false) : setIsButtonDisabled(true)  
    }, [formData, isFormValid])

    const applyWriteUsHandler = async (event) => {
        // async await + try catch
        const isSending = await SendDataInEmail( emailForSend, formData )
        setIsSendingCallback(isSending)
        console.log(isSending);
        setIsOpen(false)      
    }

    const [open, setOpen] = useState(false);
    const toggleModal = () => setOpen(prevState => !prevState);

    useEffect(() => {
        if (open === false) {
            setIsOpen(true)
        }
    }, [open])

  
    return (
        <>
            <Button 
                css={modalBtnStyles}
                onClick={toggleModal}
            >
                Написати нам
            </Button>
            <Modal
                keepMounted
                open={open}
                onClose={toggleModal}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Grid item xs={12} sx={style} css={modalWrapper}>
                    <Grid item xs={12} css={writeUsTitle}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography css={modalTitle}>Напишіть нам:</Typography>
                            <Button
                                css={buttonCloseStyle}
                                onClick={toggleModal}
                            >
                                <Box 
                                    component="img"
                                    src={closeModalButton}
                                    alt='close modal button'
                                /> 
                            </Button>
                        </Stack>
                    </Grid>

                    {isOpen ?
                        <>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Typography css={textFieldTitle}>Ваше ім'я:</Typography>
                                    <TextInput 
                                        onValidation={handleValidation}
                                        id="firstName"
                                        name="First name"
                                        rows={1}
                                        autoComplete="given-name"
                                        placeholder="Іван Петров"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography css={textFieldTitle}>Ваш email:</Typography>
                                    <TextInput 
                                        onValidation={handleValidation}
                                        id="email"
                                        name="email"
                                        rows={1}
                                        autoComplete="email"
                                        placeholder="IvanPetrov@email.com"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography css={textFieldTitle}>Текст листа:</Typography>
                                    <TextInput 
                                        onValidation={handleValidation}
                                        multiline
                                        rows={4}
                                        id="message"
                                        name="message"
                                        autoComplete="message"
                                        placeholder="Ваше повідомлення"    
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}  css={buttonWrapper}>
                                <Button 
                                    variant="contained" 
                                    size="medium" 
                                    css={buttonStyles} 
                                    disabled={isButtonDisabled}
                                    onClick={applyWriteUsHandler}
                                >
                                    Відправити
                                </Button>
                            </Grid>
                        </>
                        :
                        <MessageAboutSucces options={isSendingCallback}/>
                    } 
                </Grid>                               
            </Modal>           
        </>
    );
}
