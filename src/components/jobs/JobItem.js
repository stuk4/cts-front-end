import React from 'react'
import Grid from '@material-ui/core/Grid';
import { activeJob } from '../../actions/jobs';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/ui';
import { objectToForm } from '../../utils/objectToForm';
export const JobItem = ({job,index}) => {
    const dispatch = useDispatch();

    const handleOpenModal = ()=> {
        const jobFormated = objectToForm(job)
     
        dispatch(activeJob(jobFormated));
        dispatch(openModal());

        }
    return (
        <Grid key={job.id} container spacing={0} className={`card animate__animated  animate__fadeInRightBig   animate__delay-${index >5 ? 5: index}s`} >
        <Grid
             className="job__card-item" 
             direction="column"  
             container
             justify="center"
             item 
             xs={12} 
             md={3}   
             >
             <h2 className="job__card-title">{job.title}</h2>
             <h4 className="job__card-subtitle">Area: {job.department}</h4>
             
        </Grid>
        <Grid 
             className="job__card-item" 
             container
             direction="column"  
             item  
             xs={12} 
             md={3} >
             <h4 className="job__card-title job__card-subtitle" >Ubicación</h4>
             <h3 >{job.addresses[0].direction}</h3>
        </Grid>
        <Grid
             className="job__card-item" 
             container 
             direction="column"   
             item  
             xs={12} 
             md={3}  >
             <h4 className="job__card-title job__card-subtitle">Tipo:</h4>
             <h3 >{job.employment_type}</h3>
        </Grid> 
        <Grid
             className="job__card-item" 
             container 
             direction="column"
             justify="center"
             alignItems="center"   
             item  
             xs={12} 
             md={3} >
             <Button onClick={handleOpenModal}  variant="contained">Ver</Button>
            
        </Grid>
   </Grid>
    )
}
