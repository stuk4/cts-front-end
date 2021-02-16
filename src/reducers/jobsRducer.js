
import { types } from '../types/types'
const initialState = {
    jobs:[],
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
        case types.jobSetActive:
            return {
                ...state,
                active:{
                    ...action.payload
                }
            }

        case types.jobsLoad:

            return {
                ...state,
                jobs:[ ...action.payload]
            }
   
       default:
           return state;
   }
}
