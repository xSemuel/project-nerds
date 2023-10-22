/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CAROUSEL_BLOCK } from '../../constants';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Button, MobileStepper } from '@mui/material';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const asd = css`
    max-width: 1125px;
`

const wrapperCarouselStyle = css`
    position: relative;
`
const imgDescArea = css`
    position: absolute;
    top: 100px;
    left: 5px;
    bottom: 0;
    width: 530px;
    height: 250px;
    display: flex;
    flex-direction: column;
    gap: 25px;
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
const styleCarouselTitle = css`
    font-family: Roboto;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px;
`

const styleCarouselInfo = css`
    color: #283136;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`

const imgCarouselStyle = css`
    height: 100%;
    padding-left: 360px;
`

const styleCarouselStepper = css`
    position: absolute;
    top: 530px;
    left: 760px;
    bottom: auto;
    right: auto;
    padding: 8px;
    border-radius: 10%;
`

export const Carousel = () => {

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = CAROUSEL_BLOCK.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="container mt-5 d-flex justify-content-between">
        <Box css={asd}>
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
                        height: 430,
                        display: 'block',
                        maxWidth: 1125,
                        overflow: 'hidden',
                        width: '100%',
                        }}>
                        <Box css={imgCarouselStyle}
                            component="img"
                            src={step.img}
                            alt={step.title}
                        >
                        </Box>
                        
                        <Box css={imgDescArea}>
                            <Typography css={styleCarouselTitle}>
                                {step.title}
                            </Typography>
                            <Typography css={styleCarouselInfo}>
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
                css={styleCarouselStepper}
                steps={maxSteps}
                activeStep={activeStep}
            /> 
        </Box>
    </div>
  );
}