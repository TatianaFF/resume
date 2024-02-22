import { getPerson } from "./personReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getPerson())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}