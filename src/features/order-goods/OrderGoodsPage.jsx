/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Container, Button, Box, TableRow, TableCell } from '@mui/material';
import { selectedGoodsInCart, sumSelectedGoodsInCart, updateOrderList, selectedorderListSlice } from '../../store/slices';
import { currentNumberOfOrder, resetCart } from '../../store/slices'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'

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
	const orderGoodsContainer = css`
		margin-top: 25px;
		margin-bottom: 25px;
	`

	const orderGoodsWrapper = css`
		display: flex;
		flex-direction: column;
		gap: 25px;
	`

	const orderGoodsTitle = css`
		text-align: center;
	`

	const smallLogoCartGoods = css`
		height: 30px;
		width: 30px;
	`
	const tableWrapper = css`
		display: table;
		justify-content: space-between;
		width: 100%;
	`
	const styleTotalSumWrapper = css`
		border: solid 1px #eee;
		border-radius: 4px;
		display: flex;
		justify-content: space-around;
		gap: 20px;	
	`
	const styleTotalSumInfo = css`
		padding: 16.5px 14px;
		color: #000;
        font-size: 16px;
        font-weight: 700;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
	`

export const OrderGoodsPage = () => {


	const as = useSelector(selectedorderListSlice); 
	console.log(as)
	const dispatch = useDispatch();
	const currentOrder = useSelector(currentNumberOfOrder);
	const cart = useSelector(selectedGoodsInCart);
    const cartSum = useSelector(sumSelectedGoodsInCart); 

	const [ordersGoodsArray, setOrdersGoodsArray] = useState({idOrder: currentOrder,
															  OrderGoods: cart,
															  totalSumOfOrder: cartSum,
															})

    const onChangeHandler = (filterName, value) => {
		console.log(filterName, value )
        setOrdersGoodsArray((prevState) => ({ ...prevState, [filterName]: value }))
    }

	const applyOrdersGoodsHandler = (event) => {
        event.preventDefault();
        dispatch(updateOrderList(ordersGoodsArray))
		dispatch(resetCart())
    }

	console.log(ordersGoodsArray)

  return ( 
      <Container fixed css={orderGoodsContainer}>
			<Box css={orderGoodsWrapper}>
				<Typography 
					css={orderGoodsTitle}
					variant="h6" 
					gutterBottom
				>
					Оформлення замовлення № {currentOrder}
				</Typography>
				<Grid container spacing={3}>

					<Grid item xs={12}>
						<Typography css={orderGoodsTitle}>
							Інформація про отримувача:
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="firstName"
							name="First name"
							label="Ваше ім'я"
							fullWidth
							autoComplete="given-name"
							// onChange={onChangeHandler}
							onChange={(e) => onChangeHandler(e.target.id, e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="lastName"
							name="lastName"
							label="Ваше прізвище"
							fullWidth
							autoComplete="family-name"
							onChange={(e) => onChangeHandler(e.target.id, e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="email"
							name="email"
							label="Ваш email"
							fullWidth
							autoComplete="email"
							onChange={(e) => onChangeHandler(e.target.id, e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="telephone"
							name="telephone"
							label="Ваш номер телефону"
							fullWidth
							autoComplete="telephone"
							onChange={(e) => onChangeHandler(e.target.id, e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography css={orderGoodsTitle}>
							Інформація про доставку:
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography css={orderGoodsTitle}>
							Відправка товару тільки перевізником Нова Пошта:
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="city"
							name="city"
							label="Населений пункт"
							fullWidth
							autoComplete="city"
							onChange={(e) => onChangeHandler(e.target.id, e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField 
							required
							id="state" 
							name="state" 
							label="Область" 
							fullWidth 
							autoComplete="state"
							onChange={(e) => onChangeHandler(e.target.id, e.target.value)}

						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="numberDepartment"
							name="numberDepartment"
							label="Номер віділення нової пошти"
							fullWidth
							autoComplete="numberDepartment"
							onChange={(e) => onChangeHandler(e.target.id, e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="adressDepartment"
							name="adressDepartment"
							label="Адреса віділення нової пошти"
							fullWidth
							autoComplete="adressDepartment"
							onChange={(e) => onChangeHandler(e.target.id, e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography css={orderGoodsTitle}>
							Інформація про товар:
						</Typography>
					</Grid>
					<Grid item xs={12} >
						{cart.map(({id, srcLogo, alt, title, descInfo, descPrice}) => (
							<TableRow key={id} css={tableWrapper} onClick={() => onChangeHandler(id, descPrice)}>
								<TableCell>
									<img css={smallLogoCartGoods} src={srcLogo} alt={alt}/>
								</TableCell>
								<TableCell>{title}</TableCell>
								<TableCell>{descInfo}</TableCell>                      
								<TableCell>
									<Typography variant="body2">{descPrice}грн.</Typography>
								</TableCell>
							</TableRow>	
							
						))} 
					</Grid>
					<Grid item xs={12} >
						<Box css={styleTotalSumWrapper}>	
							<Typography css={styleTotalSumInfo}>
								Загальна сума вашого замовлення:
							</Typography>
							<Typography id="totalSum" css={styleTotalSumInfo} onChange={(e) => onChangeHandler(e.target.id, e.target.value)}>
								{cartSum}грн.
							</Typography>	
						</Box>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel onChange={(e) => onChangeHandler('dontCallback', e.target.checked)}
							control={<Checkbox color="secondary" name="dontCallback" />}
							label="Неперезванювати для підтвердження замовлення"
						/>
					</Grid>
				</Grid>
				<Button css={buttonStyles} onClick={applyOrdersGoodsHandler}>
                    Замовлення підтверджую
                </Button>
			</Box>
    </Container>
  );
}

