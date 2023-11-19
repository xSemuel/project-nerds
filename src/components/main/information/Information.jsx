import { Container, Grid } from '@mui/material';

import { InformationList, InformationStatistics } from '../information';


export const Information = () => {
    return ( 
        <Container fixed>   
            <Grid container spacing={3}>               
                <Grid item xs={8}>
                    <InformationList />
                </Grid>
            
                <Grid item xs={4}>
                    <InformationStatistics />
                </Grid>
            </Grid>
        </Container> 
    )
}
