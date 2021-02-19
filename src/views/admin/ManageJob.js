import { Button, CircularProgress, Divider, Grid } from '@material-ui/core'
import React from 'react'
import { JobAditionalInfo } from '../../components/jobs/JobAditionalInfo';
import { JobPrincipalInfo } from '../../components/jobs/JobPrincipalInfo';
import { JobReview } from '../../components/jobs/JobReview';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useDispatch, useSelector } from 'react-redux';
import { changeStepForm, openModal } from '../../actions/ui';
import { useRef } from 'react';
import { jobCleaning, jobStartAddNew, jobStartUpdating } from '../../actions/jobs';


export const ManageJob = () => {
    const {activeStepFormJob} = useSelector( state => state.ui );
    const {active:job}        = useSelector(state => state.jobs);
    const {loading}           = useSelector(state=> state.ui)
    const dispatch = useDispatch();
    
   
    const steps = ['Informacion Principal', 'Informacion adicional', 'Revisar trabajo'];

    function getStepContent(step) {
    switch (step) {
        case 0:
        return <JobPrincipalInfo />;
        case 1:
        return <JobAditionalInfo />;
        case 2:
        return <JobReview />;
        default:
        throw new Error('Unknown step');
    }
}
    const ref = useRef(null)
  
    const handleNextStep = ()=>{
        dispatch(changeStepForm(activeStepFormJob+1));
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        
        if(activeStepFormJob === steps.length -1 && job.id !== null) {
            dispatch(jobStartUpdating(job))  
        }else if(activeStepFormJob === steps.length -1 ){
            dispatch(jobStartAddNew(job))
        }
    
    }
    
    const handleBackStep = () =>{
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        if(job && job.id !== null && activeStepFormJob === 0){
            dispatch(jobCleaning())
           
        }else{
            
            dispatch(changeStepForm(activeStepFormJob-1));
            
        }
    }
    const handleShowJob = () => {
        if(job === null){
            dispatch(changeStepForm(0))
        }else{

            dispatch(openModal())
        }
    }
    return (
        <Grid
            ref={ref}
            justify="center"
            alignItems="center"
            direction="column"
            container 
            className="job__form-container" >
            <Stepper   activeStep={activeStepFormJob}  className="job__stepper">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
            { job && job.id !== null &&
                <Grid  item   xs={12}>
               <h2 style={{marginLeft:"20px"}}>Actualizando empleo: {job.title}</h2>
               <Divider variant="inset" style={{marginBottom:"20px"}} component="h2" />
                 </Grid>
            }
            
         {  
            job && job.id !== null &&  activeStepFormJob === steps.length ?
            // (<h1>{loading===false ? "Trabajo actualizado con extio!": <CircularProgress />}</h1>)
            (
                
                <Grid 
                    
                item 
                container
                direction="column"
                justify="center" alignItems="center"   
                xs={12} 
                sm={6}>
               { loading === false ?
               <>
               <h1>Trabajo actualizado con extio!</h1>
                <Button 
                    onClick={handleShowJob}
                    variant="contained"
                    >
                        Ver trabajo
                    </Button>
                </>
                    :
                    <CircularProgress />
                    }
            </Grid>
            
            
            )
            :
              activeStepFormJob === steps.length ?
           
            (<Grid 
                    
                item 
                container
                direction="column"
                justify="center" alignItems="center"   
                xs={12} 
                sm={6}>
               { loading === false ?
               <>
               <h1>Trabajo creado con extio!</h1>
                <Button 
                    onClick={handleShowJob}
                    variant="contained"
                    >
                        Crear otro empleo
                    </Button>
                </>
                    :
                    <CircularProgress />
                    }
            </Grid>)
            :
          ( <div >
            { getStepContent(activeStepFormJob)}
            <Grid container  >
                <Grid      
                    item
                    container
                    justify="center" alignItems="center" 
                    xs={12} 
                    sm={6}>
                        {
                         job && job.id !== null && activeStepFormJob === 0  ?
                         <Button 
                            onClick={handleBackStep}
                            variant="contained"
                         >Cancelar</Button>
                         :
                        activeStepFormJob !== 0 && 
                        <Button 
                            onClick={handleBackStep}
                            variant="contained"
                            >Atras</Button>
                        }
                </Grid>
                <Grid 
                    
                    item 
                    container
                    justify="center" alignItems="center"   
                    xs={12} 
                    sm={6}>
                    <Button 
                        onClick={handleNextStep}
                        variant="contained"
                        >
                            {
                             activeStepFormJob === steps.length -1 && job.id !== null ? ' Actualizar empleo'
                            : activeStepFormJob === steps.length -1 ? 'Crear empleo'
                            : 'Siguiente'
                            }
                        </Button>
                </Grid>
                
                    
            </Grid>
            </div>
            )
                

          }
        </Grid>
    )
}
