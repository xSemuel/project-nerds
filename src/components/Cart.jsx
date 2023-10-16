/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const Cart = ({options, sumInCart}) => {

    const currencyButtonStyle = css`
    font-size: 11px;
    padding-top: 4px;
    `

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Товар
                        </TableCell>
                        <TableCell align="right">
                            Прайс
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Назва товару</TableCell>
                        <TableCell align="right">Вартість</TableCell>
                        <TableCell align="right">Кількість</TableCell>
                        <TableCell align="right">Ціна</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {options.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="right"><img src={row.srcLogo} alt={row.alt}/></TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell align="right">{row.descInfo}</TableCell>                      
                            <TableCell align="right">
                                {row.descPrice}
                                <Typography css={currencyButtonStyle} variant="body2">грн.</Typography>
                            </TableCell>
                        </TableRow>
                    ))} 

                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Всього:</TableCell>
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
