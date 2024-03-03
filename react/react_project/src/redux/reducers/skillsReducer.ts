import { personApi } from "../../api/api"
import { getCategories } from "./categoriesReducer"
import { getProfessions } from "./professionsReducer"
import { InferActionsTypes } from "../reduxStore"
import { Skill } from "../../types/types"

const SET_SKILLS_DATA = 'SKILLS/SET_SKILLS_DATA'

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof skillsActions>

let initialState = {
    skills: [] as Array<Skill>
}

export const skillsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

const skillsActions = {
    setSkills: (skills: Array<Skill>) => ({ type: SET_SKILLS_DATA, skills: skills } as const)
}

export const getSkills = () => async (dispatch: any) => {
    try {
        dispatch(getProfessions())
        dispatch(getCategories())
        let responseSkills = await personApi.getSkills()
        dispatch(skillsActions.setSkills(responseSkills.data as Array<Skill>))
    } catch (e) {
        alert(e)
    }
}