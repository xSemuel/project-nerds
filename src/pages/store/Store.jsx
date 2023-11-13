/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box, Container, Grid } from '@mui/material';
import { FilterPanel } from '../../features';
import { SortItems, Catalog } from '../../components';
import { SORT_TYPE, SORT_DIR } from '../../constants';
import { selectedSort, updateFilters, selectedFilters, changeDirection, changeType  } from '../../store/slices';


    const storeTitleWrapper = css`
        height: 240px;
        background-color: #EEE;
        margin-bottom: 55px;
        padding-top: 80px;
        padding-bottom: 108px;
    `
    const storeTitle = css`
        color: #000;
        font-family: Roboto;
        font-size: 55px;
        font-weight: 500;
        line-height: 55px;
        text-align: center;
    `
    const sortWrapperStyle = css`
        display: flex;
        justify-content: space-between;
        align-items: top;
        min-height: 70px;
    `
    const titleFilterCost = css`
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
        text-transform: uppercase;
        margin-bottom: 38px;
        padding-top: 5px;
    `

export const Store = () => {

    const dispatch = useDispatch();
    const sortsMas = useSelector(selectedSort);
    const filters = useSelector(selectedFilters);

    const onClickSortTypeHandler = (sortType) => {
        dispatch(changeType(sortType))
    }

    const onChangeSortDirHandler = (sortDir) => {
        dispatch(changeDirection(sortDir))
    }

    const onSubmit = (dataFilter) => {
        dispatch(updateFilters(dataFilter))
    }

    return ( 
        <Box>
            <Container maxWidth="false" css={storeTitleWrapper}>
                <Typography css={storeTitle}>Магазин готовых шаблонов</Typography>
            </Container>

            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <FilterPanel config={filters} onChange={onSubmit} />
                    </Grid>
                    <Grid item xs={9}>
                        <Box css={sortWrapperStyle}>
                            <Typography variant="h3" css={titleFilterCost}>Сортувати:</Typography>
                            <SortItems 
                                optionsType={SORT_TYPE} 
                                optionsDir={SORT_DIR} 
                                onClick={onClickSortTypeHandler} 
                                onChange={onChangeSortDirHandler} 
                                selectedSortType={sortsMas.sortType} 
                                selectedSortDir={sortsMas.sortDir}
                            />
                        </Box>
                        <Catalog />
                    </Grid>                       
                </Grid>
            </Container>           
        </Box>
    )
}