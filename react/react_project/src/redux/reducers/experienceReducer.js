import { personApi } from "../../api/api"

const SET_EXPERIENCE_DATA = 'SET_EXPERIENCE_DATA'

let initialState = {
    experience: []
}

export const experienceReducer = (state = initialState, action) => {
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

const setExperience = (experience) => ({ type: SET_EXPERIENCE_DATA, experience: experience })


export const getExperience = () => async (dispatch) => {
    try {
        let responseExperience = await personApi.getExperience()
        dispatch(setExperience(responseExperience.data))
    } catch (e) {
        alert(e)
    }
}