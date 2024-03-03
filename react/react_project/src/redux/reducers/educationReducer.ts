import { personApi } from "../../api/api"
import { Education } from "../../types/types";
import { InferActionsTypes } from "../reduxStore";

const SET_EDUCATION_DATA = 'EDUCATION/SET_EDUCATION_DATA'

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof educationActions>

let initialState = {
    education: {} as Education
}

export const educationReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_EDUCATION_DATA:
            return {
                ...state,
                education: { ...action.education }
            }
        default:
            return state
    }
}

const educationActions = {
    setEducation: (education: Education) => ({ type: SET_EDUCATION_DATA, education: education } as const)
}

export const getEducation = () => async (dispatch: any) => {
    try {
        let response = await personApi.getEducation()
        dispatch(educationActions.setEducation(response.data[0] as Education))
    } catch (e) {
        alert(e)
    }
}