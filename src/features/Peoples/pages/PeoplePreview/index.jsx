import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import PersonInformation from '../../components/PersonInformation';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PeoplePreview(props) {
    const params = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi`)
        .then(res => {
            setDetails(res.data);
        })
    }, [details])
    return (
        <div style={{ paddingTop: "5em" }}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                        {
                            !details ? <div>Loading...</div> :
                            <PersonInformation details={details} />
                        }
                    </Grid>
                    <Grid item xs={12} md={9}>
                        This is actions person
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}