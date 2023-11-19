import { Container, Grid } from '@mui/material';

import { InformationList, InformationStatistics } from '../information';


export const Information = () => {
    return ( 
        <Container fixed>   
            <Grid container spacing={3}>
                
                <Grid item xs={8}>
                    <InformationList />
                    {/* <Box>
                        <Typography css={containerTitle}>
                            Ми — маленька, але горда<br />дизайн-студія<br /> з Уганди.
                        </Typography>
                        <Typography css={infoDescription}>
                            Дотримуємось принципів мінімалізму та чистоти. Ставимо математичний розрахунок<br /> вище креативу. Працюємо не покладаючи рук, як роботи.
                        </Typography>
                    </Box>
                    <Box css={wrapperItemInfo}>
                        <Typography css={orderTitle}>                           
                            Виконуємо замовлення на разробку:
                        </Typography>
                        {ORDER_LIST_INFO.map(({id, text}) => (
                            <Box key={id} css={itemStyle}>
                                <Box 
                                    component='img' 
                                    src={rectangle} 
                                    alt='rectangle'
                                />
                                <Typography css={orderList}>
                                    {text}
                                </Typography> 
                            </Box>
                        ))}
                    </Box> */}
                </Grid>
            
                <Grid item xs={4}>
                    <InformationStatistics />
                    {/* <NavLink to="!#">
                        <Box 
                            component='img' 
                            src={nerdsIllustration} 
                            width="360" 
                            heigth="208"  
                            alt="Nerds-illustration" 
                        />
                    </NavLink>
                    <Typography css={statisticTitle}>
                        з 2004 року Любимо точність у всьому:
                    </Typography>
                    <Grid container spacing={3}>
                        {STATISTIC_LIST.map(({id, percent, percentNum, text}) => (
                            <Grid item xs={4} key={id}>
                                <Box css={statisticPercentWrapper}>
                                    <Typography css={percentNumberStyle}>{percentNum}</Typography>
                                    <Typography css={percentStyle}>{percent}</Typography>
                                </Box>
                                <Typography css={statisticInfo}>{text}</Typography>
                            </Grid>
                        ))}
                    </Grid> */}
                </Grid>
            </Grid>
        </Container> 
    )
}
