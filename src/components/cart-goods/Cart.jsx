/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Tooltip, IconButton, Typography, Box } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = ({options, sumInCart, handleGoodCartDelete}) => {

    const currencyButtonStyle = css`
        font-size: 11px;
        padding-top: 4px;
        text-align: left;
    `
    const smallLogoCartGoods = css`
        height: 100px;
        width: 100px;
    `
    const styleCurrency = css`
        display: flex;
        justify-content: flex-end;
        gap: 2px;
        padding: 4rem;
    `

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={5}>
                            Товар
                        </TableCell>
                        <TableCell align="center">
                            Прайс
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Дія</TableCell>
                        <TableCell>№</TableCell>
                        <TableCell>Фото товару</TableCell>
                        <TableCell align="left">Назва</TableCell>
                        <TableCell align="left">Опис</TableCell>
                        <TableCell align="center">Ціна</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {options.map((row, index) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Tooltip title="Видалити">
                                    <IconButton onClick={handleGoodCartDelete} value={row.id}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                            <TableCell align="left">{index+1}</TableCell>
                            <TableCell align="left">
                                <Box component="img" css={smallLogoCartGoods} src={row.srcLogo} alt={row.alt}/>
                            </TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell align="left">{row.descInfo}</TableCell>                      
                            <TableCell align="center" css={styleCurrency}>
                                {row.descPrice}
                                <Typography css={currencyButtonStyle} variant="body2">грн.</Typography>
                            </TableCell>
                        </TableRow>
                    ))} 

                    <TableRow>
                        <TableCell rowSpan={5} />
                        <TableCell colSpan={4}>Всього:</TableCell>
                        <TableCell align="center" css={styleCurrency}>
                            {sumInCart}
                            <Typography css={currencyButtonStyle} variant="body2">грн.</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
