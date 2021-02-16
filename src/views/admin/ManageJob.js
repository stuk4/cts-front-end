import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { JobAditionalInfo } from '../../components/jobs/JobAditionalInfo';
import { JobPrincipalInfo } from '../../components/jobs/JobPrincipalInfo';
import { JobReview } from '../../components/jobs/JobReview';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useDispatch, useSelector } from 'react-redux';
import { changeStepForm } from '../../actions/ui';

export const ManageJob = () => {
    const {activeStepFormJob} = useSelector( state => state.ui );
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
    const handleNextStep = ()=>{
        dispatch(changeStepForm(activeStepFormJob+1));
    }
    const handleBackStep = () =>{
        dispatch(changeStepForm(activeStepFormJob-1));
    }

    return (
        <Grid 
            justify="center"
            alignItems="center"
            direction="column"
            container 
            className="job__form-container" >
            <Stepper activeStep={activeStepFormJob}  className="job__stepper">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {
              activeStepFormJob === steps.length ?
                (<h1>Trabajo creado con extio!</h1>)
              :
          ( <>
            { getStepContent(activeStepFormJob)}
            <Grid container  >
                <Grid      
                    item
                    container
                    justify="center" alignItems="center" 
                    xs={12} 
                    sm={6}>
                        {
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
                        >Siguiente</Button>
                </Grid>
                
                    
            </Grid>
            </>
            )
                

          }
        </Grid>
    )
}
