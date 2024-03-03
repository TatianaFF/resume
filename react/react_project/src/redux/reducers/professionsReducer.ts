import { personApi } from "../../api/api"
import { InferActionsTypes } from "../reduxStore"
import { Profession } from "../../types/types"

const SET_PROFESSIONS_DATA = 'PROFESSIONS/SET_PROFESSIONS_DATA'

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof professionsActions>

let initialState = {
    professions: [] as Array<Profession>
}

export const professionsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_PROFESSIONS_DATA:
            return {
                ...state,
                professions: action.professions
            }
        default:
            return state
    }
}

const professionsActions = {
    setProfessions: (professions: Array<Profession>) => ({
        type: SET_PROFESSIONS_DATA,
        professions: professions
    } as const)
}


export const getProfessions = () => async (dispatch: any) => {
    try {
        let responseProfessions = await personApi.getProfessions()
        dispatch(professionsActions.setProfessions(responseProfessions.data as Array<Profession>))
    } catch (e) {
        alert(e)
    }
}