import { API_STATIC_MEDIA, personApi } from "../../api/api"
import { Person } from "../../types/types"
import { InferActionsTypes } from "../reduxStore"

const SET_PERSON_DATA = 'PERSON/SET_PERSON_DATA'

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof personActions>

let initialState = {
    person: {} as Person
}

export const personReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_PERSON_DATA:
            return {
                ...state,
                person: { ...action.person, photo: API_STATIC_MEDIA + action.person.photo }
            }
        default:
            return state
    }
}

const personActions = {
    setPerson: (person: Person) => ({ type: SET_PERSON_DATA, person: person } as const)
}

export const getPerson = () => async (dispatch: any) => {
    try {
        let response = await personApi.getPerson()
        dispatch(personActions.setPerson(response.data[0] as Person))
    } catch (e) {
        alert(e)
    }
}