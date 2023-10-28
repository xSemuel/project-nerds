/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Container, Button, Box } from '@mui/material';
import { currentNumberOfOrder } from '../../store/slices'
import { useSelector } from 'react-redux';

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

export const OrderGoodsPage = () => {

	const currentOrder = useSelector(currentNumberOfOrder);



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
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="firstName"
							name="firstName"
							label="First name"
							fullWidth
							autoComplete="given-name"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="lastName"
							name="lastName"
							label="Last name"
							fullWidth
							autoComplete="family-name"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="address1"
							name="address1"
							label="Address line 1"
							fullWidth
							autoComplete="shipping address-line1"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="address2"
							name="address2"
							label="Address line 2"
							fullWidth
							autoComplete="shipping address-line2"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="city"
							name="city"
							label="City"
							fullWidth
							autoComplete="shipping address-level2"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField 
							id="state" 
							name="state" 
							label="State/Province/Region" 
							fullWidth 
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="zip"
							name="zip"
							label="Zip / Postal code"
							fullWidth
							autoComplete="shipping postal-code"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="country"
							name="country"
							label="Country"
							fullWidth
							autoComplete="shipping country"
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
							label="Use this address for payment details"
						/>
					</Grid>
				</Grid>
				<Button css={buttonStyles}>
                    Замовлення підтверджую
                </Button>
			</Box>
    </Container>
  );
}
