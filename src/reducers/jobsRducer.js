
import { types } from '../types/types'

const initialState = {
    jobs:[],
    benefits:[],
    active:null
}
export const jobsRducer = (state = initialState,action) => {
   switch (action.type) {
        case types.jobsCreateNew:
           return {
               ...state,
               jobs:[
                   ...state.jobs,
                   action.payload
               ]
           }
        case types.jobsUpdate:
            return {
                ...state,
                jobs:state.jobs.map(
                    job => job.id === action.payload.id ?
                    action.payload
                    :
                    job
                )
            }
        case types.jobsDelete:
            return {
                ...state,
                active:null,
                jobs:state.jobs.filter(
                    job => (job.id !== action.payload)
                )
            }

        case types.jobsLoad:

            return {
                ...state,
                jobs:[ ...action.payload]
            }

        case types.jobBenefitLoad:
            return {
                ...state,
                benefits:[...action.payload]
            }

        case types.jobSetActive:
            return {
                ...state,
                active:{
                    ...action.payload
                }
            }
        case types.jobCleaning:
            return {
                ...state,
                active:null,
            }
        default:
           return state;
   }
}
