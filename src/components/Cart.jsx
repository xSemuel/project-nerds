/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Tooltip, IconButton, Typography } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = ({options, sumInCart, handleGoodCartDelete}) => {

    const currencyButtonStyle = css`
    font-size: 11px;
    padding-top: 4px;
    `
    const smallLogoCartGoods = css`
        height: 100px;
        width: 100px;
    `

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={5}>
                            Товар
                        </TableCell>
                        <TableCell align="right">
                            Прайс
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Дія</TableCell>
                        <TableCell>№</TableCell>
                        <TableCell>Фото товару</TableCell>
                        <TableCell align="right">Назва</TableCell>
                        <TableCell align="right">Опис</TableCell>
                        <TableCell align="right">Ціна</TableCell>
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
                            <TableCell align="right">{index+1}</TableCell>
                            <TableCell align="right"><img css={smallLogoCartGoods} src={row.srcLogo} alt={row.alt}/></TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell align="right">{row.descInfo}</TableCell>                      
                            <TableCell align="right">
                                {row.descPrice}
                                <Typography css={currencyButtonStyle} variant="body2">грн.</Typography>
                            </TableCell>
                        </TableRow>
                    ))} 

                    <TableRow>
                        <TableCell rowSpan={5} />
                        <TableCell colSpan={4}>Всього:</TableCell>
                        <TableCell align="right">
                            {sumInCart}
                            <Typography css={currencyButtonStyle} variant="body2">грн.</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
