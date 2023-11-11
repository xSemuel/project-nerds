/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useState, useEffect } from 'react';
import { Box, Modal, Button, Typography, Grid, TextField } from '@mui/material';
import closeModalButton from './img/closeModalButton.png';

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
        margin-bottom: 13px;
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

export const ModalWindow = ({buttonOpenWindow}) => {

    const [writeUsObject, setWriteUsObject] = useState({})

    const onChangeHandler = (e) => {
    const { id: filterName, value } = e.target
        setWriteUsObject((prevState) => ({ ...prevState, [filterName]: value }))
    }

    const applyWriteUsHandler = (event) => {
    }

  console.log(writeUsObject)


  const [open, setOpen] = useState(false);
  // const handleOpen = (buttonOpenWindow) => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=> {
      setOpen(buttonOpenWindow)
  }, [buttonOpenWindow])

  return (
    <Grid container spacing={3}>
        {/* <Button onClick={() => setOpen(true)}>Open modal</Button> */}
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Grid item xs={12} sx={style} css={modalWrapper}>
                <Grid item xs={12} css={writeUsTitle}>
                    <Typography css={modalTitle}>Напишіть нам:</Typography>
                    <Box 
                        css={qw}
                        component="img"
                        src={closeModalButton}
                        alt='close modal button'
                    /> 
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography css={textFieldTitle}>Ваше ім'я:</Typography>
                        <TextField
                            required
                            fullWidth
                            id="firstName"
                            name="First name"
                            hiddenLabel
                            autoComplete="given-name"
                            defaultValue="Іван Петров"
                            onChange={onChangeHandler}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography css={textFieldTitle}>Ваш email:</Typography>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            name="email"
                            hiddenLabel
                            autoComplete="email"
                            defaultValue="IvanPetrov@email.com"
                            onChange={onChangeHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography css={textFieldTitle}>Текст листа:</Typography>
                        <TextField
                            required
                            fullWidth
                            multiline
                            rows={4}
                            id="message"
                            name="message"
                            hiddenLabel
                            autoComplete="message"
                            defaultValue="Ваш текст"
                            onChange={onChangeHandler}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}  css={buttonWrapper}>
                    <Button css={buttonStyles} onClick={applyWriteUsHandler}>
                        Відправити
                    </Button>
                </Grid>
            </Grid>
        </Modal>
    </Grid>
  );
}
