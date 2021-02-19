import { types } from "../types/types"
import useFetch from "../hooks/useFetch"
import Swal from 'sweetalert2'

import { objectToJson } from "../utils/objectToJson"
import { changeStepForm, closeModal, finishLoading, startLoading } from "./ui"
import { errors } from "../utils/formatJsonError"



export const jobStartAddNew = ( job ) => {
    return async(dispatch) =>{
        try{
        
            const object = objectToJson(job)
            dispatch(startLoading())
            const resp = await useFetch("http://localhost:8000/job/",object,'POST');
            const body = await resp.json();
            
            if(resp.ok){
                dispatch(jobCleaning())
                dispatch(finishLoading())
            }else{
             
                dispatch(changeStepForm(0));
                const errorMsg = errors(body)
                Swal.fire('Error',errorMsg,'error')
            }
           
         
        }catch(error){ 
            
            dispatch(changeStepForm(0));
            Swal.fire("Error",error.message,'error')
        }
    }
}
export const jobStartUpdating = (job) =>{
    return async(dispatch)=>{
        try{
            const object = objectToJson(job)
            dispatch(startLoading())
            const resp = await useFetch(`http://localhost:8000/job/${job.id}/`,object,'PUT')
            const body = await resp.json()
            if(resp.ok){
                dispatch(jobUpdate(object))
                dispatch(finishLoading())
                
            }else{
                
                Swal.fire('Error',body.message,'error')
                console.log(body)
            }

        }catch(error){
            dispatch(finishLoading())
            dispatch(changeStepForm(0))
            Swal.fire('Error',"Trabajo recientemente creado","error")
            console.log(error)
        }
    }
}
export const jobUpdate = (job) => ({
    type:types.jobsUpdate,
    payload:job
})

 
export const jobStartDelete = (job)=>{
    return async(dispatch)=>{
        try {
            dispatch(startLoading())
            const resp = await useFetch(`http://localhost:8000/job/${job.id}/`,{},'DELETE')
            if(resp.ok){
                dispatch(jobDelete(job.id))
                dispatch(finishLoading())
                dispatch(closeModal())
                Swal.fire({
                    toast:true,
                    position:'top-end',
                    icon:'success',
                    title:'Empleo eliminado con exito!'

                })
            }else{
                Swal.fire('Error',"No se pudo elminar",'error')
            }
        } catch (error) {
            console.log(error)
        }
    }

}
export const jobDelete = (id)=> ({
    type:types.jobsDelete,
    payload:id

})

export const startLoadingJobs = ()=> {
    return async(dispatch)=>{
        try{
            const resp = await useFetch("http://localhost:8000/job/");
            const body = await resp.json();
            dispatch(jobLoad(body))
           
        }catch(error){
            Swal.fire("Error","Hubo un problema",'error')
            
        }
    }
}

export const jobLoad = (jobs)=>({
    type:types.jobsLoad,
    payload:jobs
   
})



export const startLoadingBenefits = () => {
    return async(dispatch) =>{
        try{
            const resp = await useFetch("http://localhost:8000/job/benefits/")
            const body = await resp.json();
            dispatch(benefitLoad(body))
        }catch(error){
            Swal.fire("Error",error.message,'error')
        }
    }
}
export const benefitLoad = (benefit)=>({
    type:types.jobBenefitLoad,
    payload:benefit
})

export const activeJob = (job) => ({
    type:types.jobSetActive,
    payload:{
        ...job
    }
})
export const jobCleaning = () => ({
    type:types.jobCleaning
})