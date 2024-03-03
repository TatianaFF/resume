import { getPerson } from "./personReducer"
import { InferActionsTypes } from "../reduxStore"

const INITIALIZATION = 'APP/INITIALIZATION'

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof appActions>

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZATION:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const appActions = {
    setInitial: () => ({ type: INITIALIZATION } as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getPerson())
    Promise.all([promise])
        .then(() => {
            dispatch(appActions.setInitial())
        })
}