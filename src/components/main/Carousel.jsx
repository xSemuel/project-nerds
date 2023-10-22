/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { NavLink } from 'react-router-dom';
import { CAROUSEL_BLOCK } from '../../constants';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const wrapperCarouselStyle = css`
    position: relative;
`
const imgDescArea = css`
    position: absolute;
    top: 100px;
    left: 5px;
    bottom: 0;
    width: 400px;
    height: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const buttonStyles = css`  
    width: 240px;
    height: 50px;
    margin: 0 auto;
    background: #fb565a;
    color: #eee;
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

export const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = CAROUSEL_BLOCK.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="container mt-5 d-flex justify-content-between">
        <Box sx={{ maxWidth: 1125, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
                }}
            >
                <Typography>{CAROUSEL_BLOCK[activeStep].title}</Typography>
                <Typography>{CAROUSEL_BLOCK[activeStep].info}</Typography>
                <Button>{CAROUSEL_BLOCK[activeStep].btnInfo}</Button>

            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {CAROUSEL_BLOCK.map((step, index) => (
                <div key={step.id}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <Box css={wrapperCarouselStyle} sx={{
                        height: 500,
                        display: 'block',
                        maxWidth: 1125,
                        overflow: 'hidden',
                        width: '100%',
                        }}>
                        <Box 
                            component="img"
                            src={step.img}
                            alt={step.title}
                        >
                        </Box>
                        
                        <Box css={imgDescArea}>
                            <Typography>
                                {step.title}
                            </Typography>
                            <Typography>
                                {step.info}
                            </Typography>
                            <NavLink to={step.link}>
                                <Button css={buttonStyles}>
                                    {step.btnInfo}
                                </Button>
                            </NavLink>
                        </Box>
                    </Box>
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    Next
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
                }
            />
        </Box>
    </div>
  );
}
