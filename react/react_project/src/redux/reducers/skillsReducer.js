import { personApi } from "../../api/api"
import { getCategories } from "./categoriesReducer";
import { getProfessions } from "./professionsReducer";

const SET_SKILLS_DATA = 'SET_SKILLS_DATA'

let initialState = {
    skills: []
}

export const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SKILLS_DATA:
            return {
                ...state,
                skills: action.skills
            }
        default:
            return state
    }
}

const setSkills = (skills) => ({ type: SET_SKILLS_DATA, skills: skills })

export const getSkills = () => async (dispatch) => {
    try {
        dispatch(getProfessions())
        dispatch(getCategories())
        let responseSkills = await personApi.getSkills()
        dispatch(setSkills(responseSkills.data))
    } catch (e) {
        alert(e)
    }
}