import { applyMiddleware, combineReducers, legacy_createStore, compose, Action } from "redux"
import { thunk, ThunkAction } from "redux-thunk"
import { appReducer } from "./reducers/appReducer"
import { personReducer } from "./reducers/personReducer"
import { educationReducer } from "./reducers/educationReducer"
import { categoriesReducer } from "./reducers/categoriesReducer"
import { skillsReducer } from "./reducers/skillsReducer"
import { experienceReducer } from "./reducers/experienceReducer"
import { contactsReducer } from "./reducers/contactsReducer"
import { feedbackReducer } from "./reducers/feedbackReducer"
import { professionsReducer } from "./reducers/professionsReducer"

type ReducerType = typeof reducers
export type AppStateType = ReturnType<ReducerType>

export type InferActionsTypes<T> = T extends {
    [key: string]: (...arg: any[]) => infer U
} ? U : never

export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const reducers = combineReducers({
    appReducer,
    personReducer,
    educationReducer,
    categoriesReducer,
    professionsReducer,
    skillsReducer,
    experienceReducer,
    contactsReducer,
    feedbackReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

// @ts-ignore
window.store = store

export default store