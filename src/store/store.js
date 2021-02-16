import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { jobsRducer } from "../reducers/jobsRducer";
import { uiReducer } from "../reducers/uiReducer";




const reducers = combineReducers({
    jobs :jobsRducer,
    ui:uiReducer,
})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)