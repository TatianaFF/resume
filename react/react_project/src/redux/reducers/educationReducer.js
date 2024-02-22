import { personApi } from "../../api/api"

const SET_EDUCATION_DATA = 'SET_EDUCATION_DATA'

let initialState = {
    education: {
        start_year: null,
        end_year: null,
        institute: null,
        department: null
    }
}

export const educationReducer = (state = initialState, action) => {
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

const setEducation = (education) => ({ type: SET_EDUCATION_DATA, education: education })

export const getEducation = () => async (dispatch) => {
    try {
        let response = await personApi.getEducation()
        dispatch(setEducation(response.data[0]))
    } catch (e) {
        alert(e)
    }
}