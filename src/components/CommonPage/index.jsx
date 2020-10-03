import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';

export default function CommonPage(props) {
    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item sm={12}>
                        this products here
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}