/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, Typography, Paper, Box } from '@mui/material';

    const contactsContainer = css`
        margin: 5rem auto;
        padding: 2px;
        min-height: 600px;
    `
    const contactsWrapper = css`
        display: flex;
        flex-direction: column;
        gap: 2rem;
    `
    const contactsInfoWrapper = css`
        padding: 28px 8px 8px 8px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        min-height: 600px;
    `
    const contactsTitle = css`
        color: #000;
        font-size: 24px;
        font-weight: 700;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
        text-align: center;
    `
    const contactsItem = css`
        display: flex;
        flex-direction: column;
        gap: 2px;   
    `
    const contactSubtitle = css`
        color: #000;
        font-size: 18px;
        font-weight: 700;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
    `
    const contactTel = css`
        color: blue;
        font-size: 16px;
        font-weight: 700;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
    `
    const contactDesc = css`
        color: #000;
        font-size: 16px;
        font-weight: 500;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
    `

export const Contacts = () => {
    return ( 
        <Container fixed css={contactsContainer}>
            <Box css={contactsWrapper}>
                <Typography css={contactsTitle}>Наші контакти:</Typography>

                <Paper elevation={3} css={contactsInfoWrapper}>
                    <Box css={contactsItem}>
                        <Typography css={contactSubtitle}>
                            Відділ по роботі з клієнтами:
                        </Typography>
                        <Typography css={contactTel}>
                            +38 (097) 061 09 83
                        </Typography>
                        <Typography css={contactDesc}>
                            serg_artemenko@ukr.net
                        </Typography>
                    </Box>
                    <Box css={contactsItem}>
                        <Typography css={contactSubtitle}>
                            По питанням підключення аптеки та співпраці:
                        </Typography>
                        <Typography css={contactTel}>
                            +38 (063) 267 83 42
                        </Typography>
                        <Typography css={contactDesc}>
                            serg_artemenko@ukr.net
                        </Typography>
                    </Box>
                    <Box css={contactsItem}>
                        <Typography css={contactSubtitle}>
                            Наші реквізити:
                        </Typography>
                        <Typography css={contactDesc}>
                            ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «Уганда»
                        </Typography>
                    </Box>
                    <Box css={contactsItem}>
                        <Typography css={contactSubtitle}>
                            Адреса для зв’язку:
                        </Typography>
                        <Typography css={contactDesc}>
                            091456, м. Київ, вул. Бананова, 19, а/с 120
                        </Typography>
                    </Box>
                    <Box css={contactsItem}>
                        <Typography css={contactSubtitle}>
                            Контактний телефон:
                        </Typography>
                        <Typography css={contactTel}>
                            +38 (063) 267 83 42
                        </Typography>
                    </Box>
                </Paper>             
            </Box>
        </Container>
    );
}
