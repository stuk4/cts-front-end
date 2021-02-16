import React, { useEffect } from 'react'
import { Divider, FormControl, Grid, InputLabel, Select, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { activeJob } from '../../actions/jobs';
export const JobAditionalInfo = () => {
    const dispatch = useDispatch();
    const initialState = ()=>{
        if(job){
            return job
        }
        return {
            degree_type:''
            
        }
    }
    const {active:job} = useSelector( state => state.jobs );
    const [formValues,handleInputChange] = useForm(initialState)
    const {degree_type,}= formValues

    useEffect(() => {
    
        dispatch(activeJob({...formValues}))
        
     }, [formValues,dispatch])

    return (
        <Grid container justify="space-around" alignItems="center"  >
            <Grid item   xs={12}>
               <h2 style={{marginLeft:"20px"}}>Informacion adicional</h2>
               <Divider variant="inset" style={{marginBottom:"20px"}} component="h2" />
            </Grid>
            <Grid 
                item
                container
                justify="center" alignItems="center"   
                className="job__input-container"
                xs={12} sm={6}>
                <FormControl variant="outlined" >
                    
                    <InputLabel htmlFor="degree_type">Educación minima</InputLabel>
                    <Select
                        native
                        onChange={handleInputChange}
                        value={degree_type}
                        className="text-main"
                        label="Educacion minima"
                        inputProps={{
                            name: 'degree_type',
                            id: 'degree_type',
                        }}
                    >
                
                    <option defaultChecked value="DEGREE_TYPE_UNSPECIFIED">No esepcificado</option>
                    <option value="PRIMARY_EDUCATION">Educación primaria</option>
                    <option value="LOWER_SECONDARY_EDUCATION">Educación secundaria Media</option>
                    <option value="UPPER_SECONDARY_EDUCATION">Educación secundaria Superior</option>
                    <option value="ADULT_REMEDIAL_EDUCATION">Educación postsecundaria no terciaria</option>
                    <option value="ASSOCIATES_OR_EQUIVALENT">Educación terciaria de ciclo corto</option>
                    <option value="BACHELORS_OR_EQUIVALENT">Grado en educación terciaria nivel equivalente</option>
                    <option value="MASTERS_OR_EQUIVALENT">Nivel de maestría, especialización o equivalente</option>
                    <option value="DOCTORAL_OR_EQUIVALENT">Nivel de doctorado o equivalente</option>

                    </Select>
                </FormControl>

            </Grid>
            <Grid 
                item
                container
                justify="center" alignItems="center"   
                className="job__input-container"
                xs={12} sm={6}>
                <FormControl variant="outlined" >
                    
                    <InputLabel htmlFor="job_level">Tipo</InputLabel>
                    <Select
                        native
                        onChange={handleInputChange}
                        value={degree_type}
                        className="text-main"
                        label="Tipo"
                        inputProps={{
                            name: 'job_level',
                            id: 'job_level',
                        }}
                    >  
                    <option defaultChecked value="JOB_LEVEL_UNSPECIFIED">No esepcificado</option>
                    <option value="ENTRY_LEVEL">Menos de 2 años</option>
                    <option value="EXPERIENCED">Más de 2 años</option>
                    <option value="MANAGER">Administrador </option>
                    <option value="DIRECTOR">Director</option>
                    <option value="EXECUTIVE">Ejecutivo</option>
                    </Select>
                </FormControl>

            </Grid>
        </Grid>
    )
}