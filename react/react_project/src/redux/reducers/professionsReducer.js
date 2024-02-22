import { personApi } from "../../api/api"

const SET_PROFESSIONS_DATA = 'SET_PROFESSIONS_DATA'

let initialState = {
    professions: []
}

export const professionsReducer = (state = initialState, action) => {
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

const setProfessions = (professions) => ({ type: SET_PROFESSIONS_DATA, professions: professions })


export const getProfessions = () => async (dispatch) => {
    try {
        let responseProfessions = await personApi.getProfessions()
        dispatch(setProfessions(responseProfessions.data))
    } catch (e) {
        alert(e)
    }
}