
import {  Button, CircularProgress, Divider, Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import Modal from 'react-modal';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { jobCleaning, jobStartDelete, startLoadingBenefits } from '../../actions/jobs';
import { changeStepForm, closeModal, finishLoading } from '../../actions/ui';
import Backdrop from '@material-ui/core/Backdrop';

  Modal.setAppElement('#root')
export const JobModal = () => {
    const dispatch  = useDispatch();
    const history   = useHistory()

    const { active:job }  = useSelector(state => state.jobs)
    const { modal }       = useSelector( state => state.ui );
    const { loading }     = useSelector( state => state.ui );
    const benefits = useSelector( state => state.jobs.benefits );
    const themeLocal      = localStorage.getItem("theme") || "light"
    // TODO terminar modal y teriminar pantalla final de ManageJob
    const handleCloseModal = () =>{
        dispatch(closeModal())
        dispatch(jobCleaning())
        dispatch(finishLoading())
    }
    const handleEdit = ()=>{
        history.push('/admin/manage_job')
        dispatch(closeModal())
        dispatch(changeStepForm(0))
    }
    const handleDelete = ()=>{
        dispatch(jobStartDelete(job))
    }
    
    useEffect(() => {
      dispatch(startLoadingBenefits())
      
    }, [dispatch])  
    return (
    
  
        <Modal
          parentSelector={() => document.querySelector('#root')}
          isOpen={modal}
          closeTimeoutMS={200}
          className={`modal ${themeLocal}  base__scroll` }
          overlayClassName="modal__modal-fondo"
          onRequestClose={handleCloseModal}
        
          contentLabel="Example Modal"
        >
        { loading ?
        <Backdrop  open={loading} >
        <CircularProgress color="inherit" />
        </Backdrop>
        :
          <Grid 
              container
              justify="flex-start"
              alignContent="flex-start"
              
              alignItems="flex-start"
              className="modal__container"
              item
                >
                <Grid   
                  item
                  container
                  direction="column"
                  justify="flex-start"
              
                  xs={12}
                  
              
                >
                    
                  <Grid item   xs={12}>
                  <h2 >{job.title}</h2>
                  <h5  >Area: {job.department}, {job.employment_type}, {job.posting_region} </h5>
                  <Divider variant="inset" style={{marginBottom:"20px"}} component="h2" />
                  </Grid>
                  
                
      
                </Grid>
                <Grid
                  item
                  container 
                  justify="flex-start"
                  direction="column"
                  style={{paddingRight:"10px"}}
                  md={12}
                  lg={6}
                  >
                
                  <h2 className="modal__titles">Descripción:</h2>
                
                
                  <p >{job.description}</p>

                    
                </Grid>
                <Grid
                      item
                      container 
                      direction="column"
                      justify="flex-start"    
                      md={12}
                      lg={6}
                      >
                      
                      <h2 className="modal__titles">Beneficios:</h2>
                    { 
                        job.job_benefit.length >0 ?
                        <select  value={job.job_benefit}  disabled  className="modal__select" multiple>
                                {
                                    benefits.map((benefit) =>(
                                      <option  key={benefit.id} value={benefit.id}>{benefit.benefit_espanol}</option>
                                    ))         
                                }
                
                        </select>
                        :
                        'Sin benefiicios'
                    }
                </Grid>
                <Grid
                  item
                  container 
                  justify="flex-start"
                  direction="column"
                  style={{paddingRight:"10px"}}
                  md={12}
                  lg={6}
                  >
                
                  <h2 className="modal__titles">Responsabilidades:</h2>
                
                
                  <p >{job.description}</p>
                </Grid>
                <Grid
                  item
                  container 
                  direction="column"
                  justify="flex-start"   
                  md={12}
                  lg={6}
                  >
                  
                  <h2 className="modal__titles">Incentivos:</h2>
                  {job.incentives ?

                  <p  style={{textAlign:"start"}}>{job.incentives}</p>
                  :
                  <p>No aplica</p>
                  }
                </Grid>
                <Grid
                  item
                  container 
                  direction="column"
                  justify="center"   
                  md={12}
                  lg={6}
        
                  >
                  <h2 className="modal__titles">Requisitos:</h2>
                  <p>Estudios minimos: </p>
                  <select disabled className="modal__select" value={job.degree_type}>
                  <option hidden defaultChecked value="DEGREE_TYPE_UNSPECIFIED">No esepcificado</option>
                    <option hidden value="PRIMARY_EDUCATION">Educación primaria</option>
                    <option hidden value="LOWER_SECONDARY_EDUCATION">Educación secundaria Media</option>
                    <option hidden value="UPPER_SECONDARY_EDUCATION">Educación secundaria Superior</option>
                    <option hidden value="ADULT_REMEDIAL_EDUCATION">Educación postsecundaria no terciaria</option>
                    <option hidden value="ASSOCIATES_OR_EQUIVALENT">Educación terciaria de ciclo corto</option>
                    <option hidden value="BACHELORS_OR_EQUIVALENT">Grado en educación terciaria nivel equivalente</option>
                    <option hidden value="MASTERS_OR_EQUIVALENT">Nivel de maestría, especialización o equivalente</option>
                    <option hidden value="DOCTORAL_OR_EQUIVALENT">Nivel de doctorado o equivalente</option>
                  </select>
                  <br></br>
                  {job.incentives ?
                  
                  <p   style={{textAlign:"start"}}>{job.qualifications}</p>
                  :
                  <p>No aplica</p>
                  }
                </Grid>
                <Grid
                  item
                  container 
                  direction="column"
                  justify="flex-start"   
                  md={12}
                  lg={6}
                  >
                
                  <h2 className="modal__titles">Informacion para aplicar:</h2>
                  {job.instruction ?
                    <p>{job.instruction}</p>
                    :
                    ''
                  }
                  <br></br>
                  { job.email_contact1 && job.email_contact2 ?
                  <p>- Enviar curriculum: {job.email_contact1 } o a {job.email_contact2}</p>
                  :
                  job.email_contact1 ?
                  <p>- Enviar curriculum: {job.email_contact1 }</p>
                  :
                  job.email_contact2 ?
                  <p>- Enviar curriculum: {job.email_contact2}</p>
                  :''
                  }
                  <br></br>
                  { job.url_contact1 && job.url_contact2 ?
                  <>
                   <p>O postula aqui:</p>
                  <p>- {job.url_contact1 } o a {job.url_contact2}</p>
                  </>
                  :
                  job.email_contact1 ?
                  <>
                   <p>O postula aqui:</p>
                  <p>- {job.url_contact1 } </p>
                  </>
                  :
                  job.email_contact2 ?
                  <>
                   <p>O postula aqui:</p>
                  <p>- {job.url_contact2 } </p>
                  </>
                  :''
                 
                  }
                 
                  
                 
                </Grid>
                  {/* Seccion botoones */}
                <Grid
                    item
                    container
                    justify="space-between"
                    style={{padding:"20px"}}
                    >
                      <Button onClick={handleDelete}  id="modal__delete" variant="contained">Eliminar</Button>
                      <Button  onClick={handleEdit} id="modal__edit" variant="contained">Editar</Button>
                </Grid>   
                {/* Fin seccion botones */}
          </Grid>
        } 
         
       
           
            
          
        </Modal>
      
      
    )
}
