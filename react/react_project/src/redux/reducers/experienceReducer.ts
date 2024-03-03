import { personApi } from "../../api/api"
import { InferActionsTypes } from "../reduxStore";
import { Experience } from "../../types/types";

const SET_EXPERIENCE_DATA = 'EXPERIENCE/SET_EXPERIENCE_DATA'

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof experienceActions>

let initialState = {
    experience: [] as Array<Experience>
}

export const experienceReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_EXPERIENCE_DATA:
            return {
                ...state,
                experience: action.experience
            }
        default:
            return state
    }
}

const experienceActions = {
    setExperience: (experience: Array<Experience>) => ({ type: SET_EXPERIENCE_DATA, experience: experience } as const)
}


export const getExperience = () => async (dispatch: any) => {
    try {
        let responseExperience = await personApi.getExperience()
        dispatch(experienceActions.setExperience(responseExperience.data as Array<Experience>))
    } catch (e) {
        alert(e)
    }
}