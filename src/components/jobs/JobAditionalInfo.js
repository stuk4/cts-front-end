import React, { useEffect } from 'react'
import { Divider, FormControl, Grid, InputLabel, Select, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { activeJob, startLoadingBenefits } from '../../actions/jobs';
import MenuItem from '@material-ui/core/MenuItem';


export const JobAditionalInfo = ({inputsDisabled=false}) => {
    const dispatch = useDispatch();
    const {active:job} = useSelector( state => state.jobs );
    const benefits = useSelector( state => state.jobs.benefits );
    
    const [formValues,handleInputChange] = useForm(job)
    const {
        degree_type,
        job_level,
        qualifications,
        promotion_value,
        job_benefit,
        posting_region,
        incentives,
        responsabilities
    }= formValues

    
    useEffect(() => {
        dispatch(startLoadingBenefits())
        
    }, [dispatch])  
  
    useEffect(() => {
        
        dispatch(activeJob({...formValues}))
        
     }, [formValues,dispatch])
 

    return (
        <Grid container justify="flex-start"  alignItems="center"  >
            <Grid item   xs={12}>
               <h2 style={{marginLeft:"20px"}}>Informacion adicional</h2>
               <Divider variant="inset" style={{marginBottom:"20px"}} component="h2" />
            </Grid>
            <Grid 
                
                item
                container
                justify="center" alignItems="center"   
                className="job__input-container"
                md={12} lg={6}
                >
                <FormControl disabled={inputsDisabled} fullWidth  variant="outlined" >
                    
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
                
                    <option defaultChecked value="DEGREE_TYPE_UNSPECIFIED">No especificado</option>
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
                md={12} lg={6}
                >
                <FormControl disabled={inputsDisabled} fullWidth  variant="outlined" >
                    
                    <InputLabel htmlFor="job_level">Experiencia</InputLabel>
                    <Select
                        native
                        onChange={handleInputChange}
                        value={job_level}
                        className="text-main"
                        label="Experiencia"
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
            <Grid 
                item
                container
                justify="center" 
                alignContent="center"
                alignItems="center"   
                className="job__input-container"
                md={12}
                lg={7}
                 >
                  
                <TextField 
                        disabled={inputsDisabled}
                        fullWidth
                        required
                        onChange={handleInputChange}
                        value={qualifications}
                        name="qualifications"
                        multiline
                        rows={4}
                        label="Calificaciones"
                        autoComplete="off"
                        variant="outlined"
                        />

           </Grid>
           <Grid 
                item
                container
                justify="center" 
                alignContent="center"
                alignItems="center"   
                className="job__input-container-nexto"
                md={12}
                lg={4}
                 >
                <FormControl disabled={inputsDisabled} fullWidth variant="outlined" >
                    
                    <InputLabel htmlFor="promotion_value">Importancia de empleo</InputLabel>
                    <Select
                        native
                        onChange={handleInputChange}
                        value={promotion_value}
                        className="text-main"
                        label="Importancia de empleo"
                        inputProps={{
                            name: 'promotion_value',
                            id: 'promotion_value',
                        }}
                    >
                  
                    <option defaultChecked value={1}>Normal</option>
                    <option value={0}>Baja</option>
                    <option value={2}>Alta</option>
                    <option value={3}>Urgente</option>
                    </Select>
                </FormControl>
           </Grid>
           <Grid item   xs={12}>
               <h2 style={{marginLeft:"20px"}}>Beneficios</h2>
               <Divider variant="inset" style={{marginBottom:"20px"}} component="h2" />
            </Grid>
            <Grid 
                
                item
                container
                justify="center" alignItems="center"   
                className="job__input-container"
                md={12} lg={6}
                >
                <TextField
                    disabled={inputsDisabled}
                    select
                    fullWidth
                    name="job_benefit"
                    id="job_benefit"
                    variant="outlined"
                    label="Beneficios"
                    SelectProps={{
                    multiple: true,
                    value:job_benefit,
                    onChange: handleInputChange
                    }}
                >
                  <MenuItem disabled defaultChecked value="" >Opcional</MenuItem>
                    {
                        benefits.map((benefit) =>(
                            <MenuItem key={benefit.id} value={benefit.id}>{benefit.benefit_espanol}</MenuItem>
                        ))         
                    }
                    
            

                </TextField>
            </Grid>
            <Grid 
                
                item
                container
                justify="center" alignItems="center"   
                className="job__input-container"
                md={12} lg={6}
                >
                <FormControl disabled={inputsDisabled} fullWidth  variant="outlined" >
                    
                    <InputLabel htmlFor="posting_region">Ubicaciones de trabajo</InputLabel>
                    <Select
                        native
                        onChange={handleInputChange}
                        value={posting_region}
                        className="text-main"
                        label="Ubicaciones de trabajo"
                        inputProps={{
                            name: 'posting_region',
                            id: 'posting_region',
                        }}
                    >
                
                    <option defaultChecked value="POSTING_REGION_UNSPECIFIED">No especificado</option>
                    <option value="ADMINISTRATIVE_AREA">Solo region actual</option>
                    <option value="NATION">Pais</option>
                    <option value="TELECOMMUTE">Teletrabajo</option>

                    </Select>
                </FormControl>

            </Grid>
            <Grid 
                item
                container
                justify="center" 
                alignContent="center"
                alignItems="center"   
                className="job__input-container"
                md={12}
                lg={7}
                 >
                  
                <TextField 
                        disabled={inputsDisabled}
                        fullWidth
                        required
                        onChange={handleInputChange}
                        value={incentives}
                        name="incentives"
                        multiline
                        rows={4}
                        label="Incentivos"
                        autoComplete="off"
                        variant="outlined"
                        />
           </Grid>
           <Grid item   xs={12}>
               <h2 style={{marginLeft:"20px"}}>Responsabilidades</h2>
               <Divider variant="inset" style={{marginBottom:"20px"}} component="h2" />
            </Grid>
           <Grid 
                item
                container
                justify="center" 
                alignContent="center"
                alignItems="center"   
                className="job__input-container"
                md={12}
                lg={7}
                 >
                  
                <TextField 
                        disabled={inputsDisabled}
                        fullWidth
                        required
                        onChange={handleInputChange}
                        value={responsabilities}
                        name="responsabilities"
                        multiline
                        rows={4}
                        label="Responsabilidades"
                        autoComplete="off"
                        variant="outlined"
                        />
           </Grid>
        </Grid>
    )
}