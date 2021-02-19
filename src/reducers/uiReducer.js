import { types } from "../types/types";

const initialState = {
    visibilitySideBar:false,
    theme:'light',
    activeStepFormJob:0,
    loading:false,
    modal:false
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


        case types.uiStartLoading:
            return {
                ...state,
                loading:true

            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading:false
            }



        case types.uiOpenModal:
            return {
                ...state,
                modal:true
            }
        case types.uiCloseModal:
            return {
                ...state,
                modal:false
            }
        default:
            return state;
    }
}