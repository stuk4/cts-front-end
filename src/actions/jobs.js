import { types } from "../types/types"
import useFetch from "../hooks/useFetch"
import Swal from "sweetalert2"



export const startLoadingJobs = ()=> {
    return async(dispatch)=>{
        try{
            console.log("[ACTION startLoadingJobs] ")
            const resp = await useFetch("http://localhost:8000/job/");
            const body = await resp.json();
            dispatch(jobLoad(body))
           
        }catch(error){
            Swal.fire("Error",error.message,'error')
            
        }
    }
}

export const jobLoad = (jobs)=>({
    type:types.jobsLoad,
    payload:jobs
   
})


export const activeJob = (job) => ({
    type:types.jobSetActive,
    payload:{
        ...job
    }
})