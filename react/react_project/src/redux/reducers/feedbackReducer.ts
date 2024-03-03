import { personApi } from "../../api/api";
import { InferActionsTypes } from "../reduxStore";

const SET_FEEDBACK_DATA = 'FEEDBACK/SET_FEEDBACK_DATA'

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof feedbackActions>

let initialState = {
    email: '',
    message: ''
}

export const feedbackReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_FEEDBACK_DATA:
            return {
                ...state,
                email: action.email,
                message: action.message
            }
        default:
            return state
    }
}

const feedbackActions = {
    setFeedbackData: (email: string, message: string) => ({ type: SET_FEEDBACK_DATA, email, message} as const)
}

export const sendFeedbackData = (email: string, message: string) => async  (dispatch: any) => {
    dispatch(feedbackActions.setFeedbackData(email, message))
    try {
        let responseFeedback = await personApi.sendFeedback(email, message)
        console.log(responseFeedback)
    } catch (e) {
        alert(e)
    }
}