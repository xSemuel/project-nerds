/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, Box } from '@mui/material';
import { NavLink } from "react-router-dom";
import { PARTNERS_BLOCK } from '../../constants';

    const partnerWrapper = css`
        display: flex;
        justify-content: space-around;
    `
    const imgStyle = css`
        width: 199px;
        height: 68px;
    `
export const Partner = () => {
    return ( 
        <Container fixed>
            <Box css={partnerWrapper}>
                {PARTNERS_BLOCK.map(({ id, logo, alt, link }) =>   
                    <Box key={id}>
                        <NavLink to={link} target="_blank">
                            <Box css={imgStyle}
                                component='img'
                                src={logo}
                                alt={alt}
                            />
                        </NavLink>
                    </Box>
                )}
            </Box>
        </Container>
    )
}
