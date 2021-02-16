import { types } from "../types/types";

export const showSidebar = (visibility)=>({  
    type:types.uiShowSideBar,
    payload:!visibility
})

export const changeTheme = (theme) => ({
    type:types.uiChangeTheme,
    payload:theme
})

export const changeStepForm = (step) => ({
    type:types.uiChangeStepJob,
    payload:step
})