import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  startLoadingJobs } from '../../actions/jobs';
import { JobItem } from '../../components/jobs/JobItem';

export const JobList = () => {
     const jobs = useSelector( state => state.jobs.jobs );
     const dispatch = useDispatch();
     
     useEffect(() => {
         dispatch(startLoadingJobs());
        
     }, [dispatch])   
    return (
   <>
    <div className="job__card-container">
     {
          jobs.map((job,index)=>(
          <JobItem key={index} job={job}  index={index} />
          ))
     }    
    
     
    
    </div>

  </>
    )
}
