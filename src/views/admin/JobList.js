import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { startLoadingJobs } from '../../actions/jobs';
import { Button } from '@material-ui/core';

export const JobList = () => {
     const jobs = useSelector( state => state.jobs.jobs );
 
     const dispatch = useDispatch();
     useEffect(() => {
         dispatch(startLoadingJobs());
     }, [dispatch])
     // TODO cuando creee el boto update 
     // crear un uitls para formatear el json al formato de mi form
     console.log(jobs)
    return (
   <>
    <div className="job__card-container">
     {
          jobs.map((job)=>(
     <Grid key={job.id} container spacing={0} className="card" >
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
               <Button variant="contained">Ver</Button>
          </Grid>
     </Grid>
    ))
     }


    </div>


  </>
    )
}
