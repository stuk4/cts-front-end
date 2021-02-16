import { Divider, FormControl, Grid, InputLabel, Select, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeJob } from '../../actions/jobs';
import { useForm } from '../../hooks/useForm';


export const JobPrincipalInfo = () => {
    const dispatch = useDispatch();
    const {active:job} = useSelector( state => state.jobs );
    const initialState = ()=>{
        if(job){
            return job
        }
        return {
            title:'',
            department:'',
            employment_type:'',
            direction1:'',
            direction2:'',
            description:'',
            email_contact1:'',
            email_contact2:'',
            url_contact1:'',
            url_contact2:'',
            instruction:'',
            type_compensation:'',
            unit_compensation:'',
            max_range_amount:0,
            min_range_amount:0,
            
        }
    }
    const [formValues,handleInputChange] = useForm(initialState)
    const {
        title,
        department,
        employment_type,
        direction1,
        direction2,
        description,
        email_contact1,
        email_contact2,
        url_contact1,
        url_contact2,
        instruction,
        type_compensation,
        unit_compensation,
        max_range_amount,
        min_range_amount,
    } = formValues

    // TODO agregar informacion de compensacion

    
    useEffect(() => {
       dispatch(activeJob({...formValues}))
       
    }, [formValues,dispatch])
    return (
       <Grid container   justify="center" alignItems="center"  >
           <Grid item   xs={12}>
               <h2 style={{marginLeft:"20px"}}>Información principal</h2>
               <Divider variant="inset" style={{marginBottom:"20px"}} component="h2" />
            </Grid>
           <Grid 
                item 
                container 
                justify="center" alignItems="center"  
                className="job__input-container"  
                xs={12} sm={3}
                >
                <TextField 
                    onChange={handleInputChange}
                    required
                    value={title}
                    name="title"
                    label="Titulo"
                    autoComplete="off"
                    variant="outlined"
                    
                />
           </Grid>
           <Grid 
                item
                container
                justify="center" alignItems="center"   
                className="job__input-container"
                xs={12} sm={2}>
                <TextField 
                    onChange={handleInputChange}
                    value={department}
                    required
                    name="department"
                    label="Departmaento"
                    autoComplete="off"
                    variant="outlined"
                        
                        />
           </Grid>
           <Grid 
                item
                container
                justify="center" alignItems="center"   
                className="job__input-container"
                xs={12} sm={3}>
                <FormControl variant="outlined" >
                    
                <InputLabel htmlFor="employment_type">Tipo</InputLabel>
                <Select
                    native
                    onChange={handleInputChange}
                    value={employment_type}
                    className="text-main"
                    label="Tipo"
                    inputProps={{
                        name: 'employment_type',
                        id: 'employment_type',
                    }}
                >
              
                <option defaultChecked value="EMPLOYMENT_TYPE_UNSPECIFIED">No esepcificado</option>
                <option value="FULL_TIME">Tiempo completo</option>
                <option value="PART_TIME">Part-time</option>
                <option value="CONTRACTOR">Contratista</option>
                <option value="CONTRACT_TO_HIRE">Segun desempeño</option>
                <option value="TEMPORARY">Temporal</option>
                <option value="INTERN">Practica</option>
                <option value="VOLUNTEER">Voluntario</option>
                <option value="PER_DIEM">Flexible</option>
                <option value="FLY_IN_FLY_OUT">Viajero</option>
                <option value="OTHER_EMPLOYMENT_TYPE">Otro</option>

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
                xs={12} 
                sm={6}
                md={2}
                >
                  <TextField
                    onChange={handleInputChange}
                    value={direction1} 
                    required
                    name="direction1"
                    label="Direccion"
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
                className="job__input-container"
                xs={12}
                sm={6}
                md={2}
                 >
                  <TextField
                    onChange={handleInputChange}
                    value={direction2} 
                    name="direction2"
                    label="Direccion opcional"
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
                className="job__input-container"
                xs={7} >
                  
                <TextField 
                        onChange={handleInputChange}
                        value={description}
                        required
                        name="description"
                        multiline
                        rows={4}
                        fullWidth
                        label="Descripción"
                        autoComplete="off"
                        variant="outlined"
                        />

           </Grid>
            <Grid item   xs={12}>
               <h2 style={{marginLeft:"20px"}}>Informacion para aplicar</h2>
               <Divider variant="inset" style={{marginBottom:"20px"}} component="h2" />
            </Grid>
            <Grid 
                item 
                container 
                justify="center" alignItems="center"  
                className="job__input-container"  
                xs={12} sm={3}
                >
                <TextField
                    onChange={handleInputChange}
                    value={email_contact1} 
                    required
                    type="email"
                    name="email_contact1"
                    label="Email contacto"
                    placeholder="Email de contacto"
                    autoComplete="off"
                    variant="outlined"
                    
                />
           </Grid>
           <Grid 
                item 
                container 
                justify="center" alignItems="center"  
                className="job__input-container"  
                xs={12} sm={3}
                >
                <TextField
                    onChange={handleInputChange}
                    value={email_contact2} 
                    type="email"
                    name="email_contact2"
                    label="Email contacto 2"
                    placeholder="Email opcional"
                    autoComplete="off"
                    variant="outlined"
                    
                />
           </Grid>
           <Grid 
                item 
                container 
                justify="center" alignItems="center"  
                className="job__input-container"  
                xs={12} sm={3}
                >
                <TextField
                    onChange={handleInputChange}
                    value={url_contact1}
                    type="url" 
                    name="url_contact1"
                    label="Url contacto"
                    placeholder="Url de contacto"
                    autoComplete="off"
                    variant="outlined"
                    
                />
           </Grid>
           <Grid 
                item 
                container 
                justify="center" alignItems="center"  
                className="job__input-container"  
                xs={12} sm={3}
                >
                <TextField
                    onChange={handleInputChange}
                    value={url_contact2} 
                    type="url"
                    name="url_contact2"
                    label="Url contacto 2"
                    placeholder="Url opcional"
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
                className="job__input-container"
                xs={7} >
                  
                <TextField 
                            onChange={handleInputChange}
                            value={instruction}
                            name="instruction"
                            multiline
                            rows={4}
                            fullWidth
                            label="Intrucciones"
                            autoComplete="off"
                            variant="outlined"
                        />

           </Grid>
             <Grid item   xs={12}>
               <h2 style={{marginLeft:"20px"}}>Informacion de compensación</h2>
               <Divider variant="inset" style={{marginBottom:"20px"}} component="h2" />
            </Grid>
            <Grid 
                item
                container
                justify="center" alignItems="center"   
                className="job__input-container"
                xs={12} sm={3}>
                <FormControl variant="outlined" >
                    
                <InputLabel htmlFor="type_compensation">Tipo compensasion</InputLabel>
                <Select
                    native
                    onChange={handleInputChange}
                    value={type_compensation}
                    className="text-main"
                    label="Tipo compensasion"
                    inputProps={{
                        name: 'type_compensation',
                        id: 'type_compensation',
                    }}
                >
                <option defaultChecked value="COMPENSATION_TYPE_UNSPECIFIED">No esepcificado</option>
                <option value="BASE">Base</option>
                <option value="BONUS">Bonos</option>
                <option value="SIGNING_BONUS">Bono por firma</option>
                <option value="EQUITY">Capital</option>
                <option value="PROFIT_SHARING">Reparto de utilidades</option>
                <option value="COMMISSIONS">Comision</option>
                <option value="TIPS">Consejos</option>
                <option value="OTHER_COMPENSATION_TYPE">Otro tipo de compensasión</option>

                

                </Select>
            </FormControl>

           </Grid>
           <Grid 
                item
                container
                justify="center" alignItems="center"   
                className="job__input-container"
                xs={12} sm={3}>
                <FormControl variant="outlined" >
                    
                <InputLabel htmlFor="unit_compensation">Unidad compensasion</InputLabel>
                <Select
                    native
                    onChange={handleInputChange}
                    value={unit_compensation}
                    className="text-main"
                    label="Unidad compensasion"
                    inputProps={{
                        name: 'unit_compensation',
                        id: 'unit_compensation',
                    }}
                >
                <option defaultChecked value="COMPENSATION_UNIT_UNSPECIFIED">No esepcificado</option>
                <option value="HOURLY">Cada hora</option>
                <option value="DAILY">Diario</option>
                <option value="WEEKLY">Semanal</option>
                <option value="MONTHLY">Mensual</option>
                <option value="YEARLY">Anual</option>
                <option value="ONE_TIME">Una vez</option>
                <option value="OTHER_COMPENSATION_UNIT">Otra</option>
    
               
                </Select>
            </FormControl>

           </Grid> 
           <Grid 
                item 
                container 
                justify="center" alignItems="center"  
                className="job__input-container"  
                xs={12} sm={3}
                >
                <TextField 
                    onChange={handleInputChange}
                    type="number"
                    value={min_range_amount}
                    label="Min comepnsasión"
                    name="min_range_amount"
                    autoComplete="off"
                    variant="outlined"
                    
                />
           </Grid>  
            <Grid 
                item 
                container 
                justify="center" alignItems="center"  
                className="job__input-container"  
                xs={12} sm={3}
                >
                <TextField 
                    onChange={handleInputChange}
                    type="number"
                    value={max_range_amount}
                    label="Max comepnsasión"
                    name="max_range_amount"
                    autoComplete="off"
                    variant="outlined"
                    
                />
           </Grid>      
               
       </Grid>
    )
}
