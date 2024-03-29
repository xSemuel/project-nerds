// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// import { Grid, Typography, FormControlLabel, Checkbox, Container, Button, Box, Table, TableBody, TableRow, TableCell } from '@mui/material';
// import { selectedGoodsInCart, sumSelectedGoodsInCart, updateOrderList } from '../../store/slices';
// import { currentNumberOfOrder, resetCart } from '../../store/slices'
// import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react'

// import { OrderInfoSucess } from './OrderInfoSucess';
// import { TextInput } from './TextInput';
// import { orderCustomer, orderDelivery } from '../../constants';


// const buttonStyles = css`  
// 	width: 260px;
// 	height: 52px;
// 	margin: 0 auto;
// 	margin-bottom: 30px;
// 	background: #eee;
// 	color: #000;
// 	fontSize: 16px;
// 	fontWeight: 500;
// 	font-family: inherit;
// 	line-height: 18px;
// 	text-transform: uppercase;
// 	transition: .3s ease-in;
// 	&:hover {
// 		background: #d7373b;
// 		color: #ffffff;
// 	}
// 	`
// 	const orderGoodsContainer = css`
// 		margin-top: 25px;
// 		margin-bottom: 25px;
// 	`
// 	const orderGoodsWrapper = css`
// 		display: flex;
// 		flex-direction: column;
// 		gap: 25px;
// 	`
// 	const orderGoodsTitle = css`
// 		text-align: center;
// 	`
// 	const smallLogoCartGoods = css`
// 		height: 30px;
// 		width: 30px;
// 	`
// 	const tableWrapper = css`
// 		display: table;
// 		justify-content: space-between;
// 		width: 100%;
// 	`
// 	const styleTotalSumWrapper = css`
// 		border: solid 1px #eee;
// 		border-radius: 4px;
// 		display: flex;
// 		justify-content: space-around;
// 		gap: 20px;	
// 	`
// 	const styleTotalSumInfo = css`
// 		padding: 16.5px 14px;
// 		color: #000;
//         font-size: 16px;
//         font-weight: 700;
//         font-family: inherit;
//         line-height: 18px;
//         text-transform: uppercase;
// 	`

// export const OrderGoodsPage = () => {

// 	const [ openOrderInfo, setOpenOrderInfo] = useState(false); // isOrderInfoOpen, setIsOrderInfoOpen
// 	const [isButtonDisabled, setIsButtonDisabled] = useState(true); // === isFormValid ???
// 	const [isFormValid, setIFormsValid]= useState({})  // remove
	
// 	const dispatch = useDispatch();
// 	const currentOrder = useSelector(currentNumberOfOrder); // remove
// 	const cart = useSelector(selectedGoodsInCart); // remove
//     const cartSum = useSelector(sumSelectedGoodsInCart);  // remove

// 	// const [objectOrderGood, setObjectOrderGood] = useState({idOrder: currentOrder,
// 	// 														  OrderGoods: cart,
// 	// 														  totalSumOfOrder: cartSum,
// 	// 														})
// 	const [objectOrderGood, setObjectOrderGood] = useState({
// 		firstName: '', // ....
// 		lastName: '',
// 	}) // buyerInfo, setBuyerInfo

// 		// TODO: rename to onChange													
//     const handleValidation = (filterName, value, isValidTextField) => {
//         setObjectOrderGood((prevState) => ({ ...prevState, [filterName]: value }))
// 		// setIFormsValid((prevState) => ({ ...prevState, [filterName]: isValidTextField }))
//     }

// 	useEffect(() => {     // useMemo
// 		console.log(isFormValid)
//         const validateForSend = Object.values(isFormValid).every(item => item !== true && item !== '') && Object.values(isFormValid).length === 8
// 		console.log(validateForSend)
//         // validateForSend ? setIsButtonDisabled(false) : setIsButtonDisabled(true)  
//         setIsButtonDisabled(validateForSend)  
//     }, [isFormValid])

// 	const onCheckHandler = (e) => {
// 		const { id: filterName, checked } = e.target
//         setObjectOrderGood((prevState) => ({ ...prevState, [filterName]: checked }))
//     }

// 	const applyOrdersGoodsHandler = (event) => {
//         event.preventDefault();
//         // dispatch(updateOrderList(objectOrderGood))
//         dispatch(updateOrderList({
// 			...objectOrderGood,
// 			// idOrder: currentOrder,
// 			// OrderGoods: cart,
// 			// totalSumOfOrder: cartSum
// 		}))
// 		dispatch(resetCart())
// 		setOpenOrderInfo(true)
//     }


//   	return ( 
//       	<Container fixed css={orderGoodsContainer}>

// 			{openOrderInfo ? <OrderInfoSucess options={objectOrderGood}/> : 

// 				<Box css={orderGoodsWrapper}>
// 					<Typography 
// 						css={orderGoodsTitle}
// 						variant="h6" 
// 						gutterBottom
// 					>
// 						Оформлення замовлення № {currentOrder}
// 					</Typography>
// 					<Grid container spacing={3}>
// 						<Grid item xs={12}>
// 							<Typography css={orderGoodsTitle}>
// 								Інформація про отримувача:
// 							</Typography>
// 						</Grid>

// 						{orderCustomer.map(({id, name, label, autoComplete, placeholder}) => (
// 							<Grid item xs={12} sm={6} key={id}>
// 								<TextInput 
// 									onValidation={handleValidation}
// 									id={id}
// 									name={name}
// 									rows={1}
// 									label={label}
// 									autoComplete={autoComplete}
// 									placeholder={placeholder}
// 								/>
// 							</Grid>
// 						))}

// 						<Grid item xs={12}>
// 							<Typography css={orderGoodsTitle}>
// 								Інформація про доставку:
// 							</Typography>
// 						</Grid>
// 						<Grid item xs={12}>
// 							<Typography css={orderGoodsTitle}>
// 								Відправка товару тільки перевізником Нова Пошта:
// 							</Typography>
// 						</Grid>

// 						{orderDelivery.map(({id, name, label, autoComplete, placeholder}) => (
// 							<Grid item xs={12} sm={6} key={id}>
// 								<TextInput 
// 									onValidation={handleValidation}
// 									id={id}
// 									name={name}
// 									rows={1}
// 									label={label}
// 									autoComplete={autoComplete}
// 									placeholder={placeholder}
// 								/>
// 							</Grid>
// 						))}

// 						<Grid item xs={12}>
// 							<Typography css={orderGoodsTitle}>
// 								Інформація про товар:
// 							</Typography>
// 						</Grid>
// 						<Grid item xs={12}>
// 							<Table>
// 								<TableBody>
// 									{cart.map(({id, srcLogo, alt, title, descInfo, descPrice}) => (
// 										<TableRow key={id} css={tableWrapper}>
// 											<TableCell>
// 												<Box 
// 													component="img" 
// 													css={smallLogoCartGoods} 
// 													src={srcLogo} 
// 													alt={alt}
// 												/>
// 											</TableCell>
// 											<TableCell>{title}</TableCell>
// 											<TableCell>{descInfo}</TableCell>                      
// 											<TableCell>
// 												<Typography variant="body2">{descPrice}грн.</Typography>
// 											</TableCell>
// 										</TableRow>	
// 									))} 
// 								</TableBody>
// 							</Table>
// 						</Grid>
// 						<Grid item xs={12} >
// 							<Box css={styleTotalSumWrapper}>	
// 								<Typography css={styleTotalSumInfo}>
// 									Загальна сума вашого замовлення:
// 								</Typography>
// 								<Typography id="totalSum" css={styleTotalSumInfo} >
// 									{cartSum}грн.
// 								</Typography>	
// 							</Box>
// 						</Grid>
// 						<Grid item xs={12}>
// 							<FormControlLabel 
// 								control={<Checkbox id="dontCallback" onChange={onCheckHandler} color="secondary" name="dontCallback" />}
// 								label="Неперезванювати для підтвердження замовлення"
// 							/>
// 						</Grid>
// 					</Grid>
// 					<Button 
// 						css={buttonStyles}
// 						disabled={isButtonDisabled} 
// 						onClick={applyOrdersGoodsHandler}
// 					>
// 						Замовлення підтверджую
// 					</Button>
// 				</Box>
// 			}
//     	</Container>
//   	);
// }
