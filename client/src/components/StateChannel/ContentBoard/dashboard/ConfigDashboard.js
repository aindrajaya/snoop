import React from 'react';
import {Grid} from '@material-ui/core';

import {gridSpacing} from '../../../../redux/constant/constant';    

import StoreRedisCard from '../../../ui-component/cards/StoreRedisCard';
import StoreIPFSCard from '../../../ui-component/cards/StoreIPFSCard';
import SettingCard from '../../../ui-component/cards/SettingCard';

import { Fragment } from 'react';

const ConfigDashboard = () => {
    return (
        <Fragment>
            <Grid container spacing={gridSpacing}>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                    <SettingCard />
                </Grid>
                <Grid item xs={12}>
                    <StoreRedisCard />
                    <StoreIPFSCard />
                </Grid>                
            </Grid>
            
        </Fragment>
    );
};

export default ConfigDashboard;
