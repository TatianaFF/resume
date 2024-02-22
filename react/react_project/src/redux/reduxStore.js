import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux"
import { thunk } from "redux-thunk"
import { appReducer } from "./reducers/appReducer"
import { personReducer } from "./reducers/personReducer";
import { educationReducer } from "./reducers/educationReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { skillsReducer } from "./reducers/skillsReducer";
import { experienceReducer } from "./reducers/experienceReducer";
import { contactsReducer } from "./reducers/contactsReducer";
import { feedbackReducer } from "./reducers/feedbackReducer";
import { professionsReducer } from "./reducers/professionsReducer";

let reducers = combineReducers({
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

window.store = store

export default store