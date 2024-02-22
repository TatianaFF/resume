import { personApi } from "../../api/api";

const SET_FEEDBACK_DATA = 'SET_FEEDBACK_DATA'

let initialState = {
    email: null,
    message: null
}

export const feedbackReducer = (state = initialState, action) => {
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

const setFeedbackData = (email, message) => ({ type: SET_FEEDBACK_DATA, email, message})

export const sendFeedbackData = (email, message) => async  (dispatch) => {
    dispatch(setFeedbackData(email, message))
    try {
        let responseFeedback = await personApi.sendFeedback(email, message)
        console.log(responseFeedback)
    } catch (e) {
        alert(e)
    }
}