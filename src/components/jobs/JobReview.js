import { Divider, Grid } from '@material-ui/core'
import React from 'react'

import { JobAditionalInfo } from './JobAditionalInfo'
import { JobPrincipalInfo } from './JobPrincipalInfo'

export const JobReview = () => {
    
    // TODO AGEGGAR PROP inputDisabled al otro componente
    // Y ver lo del scroll en AdminLayout cada vez que estoy en un componente de mi create job
    return (
        <>
            <Grid justify="center" container item  xs={12}>

               <h2 style={{marginLeft:"20px"}}>Revisión de información</h2>
               <Divider  style={{marginBottom:"20px"}} component="h2" />
            </Grid>
        <JobPrincipalInfo inputsDisabled={true} />
        <JobAditionalInfo inputsDisabled={true} />
        </>
        )
}
