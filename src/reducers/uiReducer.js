import { types } from "../types/types";

const initialState = {
    visibilitySideBar:false,
    theme:'light',
    activeStepFormJob:0
}

export const uiReducer  = (state= initialState,action) =>{
    switch (action.type) {
        case types.uiShowSideBar:
            return {
                ...state,
                visibilitySideBar:action.payload
            }
        case types.uiChangeTheme:
            return{
                ...state,
                theme:action.payload

            }
        case types.uiChangeStepJob:
            return {
                ...state,
                activeStepFormJob:action.payload
            }
    
        default:
            return state;
    }
}