/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Grid, TextField, Typography, FormControlLabel, Checkbox, Container, Button, Box, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { selectedGoodsInCart, sumSelectedGoodsInCart, updateOrderList } from '../../store/slices';
import { currentNumberOfOrder, resetCart } from '../../store/slices'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useMemo } from 'react'

import { OrderInfoSucess } from './OrderInfoSucess';
import { orderCustomer, orderDelivery } from '../../constants';

import { validateForm } from './helper';


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
	const currentOrder = useSelector(currentNumberOfOrder);
	const cart = useSelector(selectedGoodsInCart);
    const cartSum = useSelector(sumSelectedGoodsInCart);


	const [ isOrderInfoOpen, setIsOrderInfoOpen] = useState(false);
	const [error, setError] = useState('');
	const [errorText, setErrorText] = useState('');
	const dispatch = useDispatch();


	const [orderInfo, setOrderInfo] = useState({
		firstName: '',
		lastName: '',
		email: '',
		telephone: '',
		state: '',
		city: '',
		numberDepartment: '',
		adressDepartment: '',
		dontCallback: false,
	});
												

	useMemo(() => {		
		console.log(validateForm(orderInfo))
		// setErrorText((prevState) => ({ ...prevState, [key]: isValid[key] }))
    }, [orderInfo])

    const onChangeHandler = (e) => {
		const { id: filterName, value } = e.target
        setOrderInfo((prevState) => ({ ...prevState, [filterName]: value }))
    }

	const onCheckHandler = (e) => {
		const { id: filterName, checked } = e.target
        setOrderInfo((prevState) => ({ ...prevState, [filterName]: checked }))
    }

	const applyOrdersGoodsHandler = (event) => {
        event.preventDefault();

		const isValid = validateForm(orderInfo); // errors
		console.log("isValid",isValid)
		if (isValid === null) {
			dispatch(updateOrderList(orderInfo))
			dispatch(resetCart())
			setIsOrderInfoOpen(true)
		} else {

			const q = Object.keys(isValid)
			
			
			q.map( key => {
				
				setErrorText((prevState) => ({ ...prevState, [key]: isValid[key] }))
				setError((prevState) => ({ ...prevState, [key]: (!isValid[key].isValid) }))
				// !validInput.isValid
			})
		}
    }

	// console.log(isOrderInfoOpen)
	// console.log(error)
	// console.log(errorText)
	console.log("errorText",errorText)


  	return ( 
      	<Container fixed css={orderGoodsContainer}>

			{isOrderInfoOpen ? <OrderInfoSucess options={orderInfo}/> : 

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

						{orderCustomer.map(({id, name, label, autoComplete, placeholder}) => (
							<Grid item xs={12} sm={6} key={id}>
								<TextField
									required
									fullWidth
									label={label}
									rows={1}
									multiline
									id={id}
									placeholder={placeholder}
									name={name}
									hiddenLabel
									autoComplete={autoComplete}
									onChange={onChangeHandler}
									// onBlur={onChangeHandler}
									error={error[id]}  // Boolean(error[id])
									helperText={errorText[id]}
								/>
							</Grid>
						))}

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

						{orderDelivery.map(({id, name, label, autoComplete, placeholder}) => (
							<Grid item xs={12} sm={6} key={id}>
								<TextField
									required
									fullWidth
									label={label}
									rows={1}
									multiline
									id={id}
									placeholder={placeholder}
									name={name}
									hiddenLabel
									autoComplete={autoComplete}
									onChange={onChangeHandler}
									// onBlur={onChangeHandler}
									// error={error}
									// helperText={errors[id]}
									// helperText={errorText}
								/>
							</Grid>
						))}

						<Grid item xs={12}>
							<Typography css={orderGoodsTitle}>
								Інформація про товар:
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Table>
								<TableBody>
									{cart.map(({id, srcLogo, alt, title, descInfo, descPrice}) => (
										<TableRow key={id} css={tableWrapper}>
											<TableCell>
												<Box 
													component="img" 
													css={smallLogoCartGoods} 
													src={srcLogo} 
													alt={alt}
												/>
											</TableCell>
											<TableCell>{title}</TableCell>
											<TableCell>{descInfo}</TableCell>                      
											<TableCell>
												<Typography variant="body2">{descPrice}грн.</Typography>
											</TableCell>
										</TableRow>	
									))} 
								</TableBody>
							</Table>
						</Grid>
						<Grid item xs={12} >
							<Box css={styleTotalSumWrapper}>	
								<Typography css={styleTotalSumInfo}>
									Загальна сума вашого замовлення:
								</Typography>
								<Typography id="totalSum" css={styleTotalSumInfo} >
									{cartSum}грн.
								</Typography>	
							</Box>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel 
								control={<Checkbox id="dontCallback" onChange={onCheckHandler} color="secondary" name="dontCallback" />}
								label="Неперезванювати для підтвердження замовлення"
							/>
						</Grid>
					</Grid>
					<Button 
						css={buttonStyles}
						onClick={applyOrdersGoodsHandler}
					>
						Замовлення підтверджую
					</Button>

					<Grid item xs={12} >
						{Object.keys(error).map(key => <Typography align="center" key={key}>{error[key]}</Typography>)}
					</Grid>
				</Box>
			}
    	</Container>
  	);
}
