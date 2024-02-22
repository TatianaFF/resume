import { API_STATIC_MEDIA, personApi } from "../../api/api"

const SET_PERSON_DATA = 'SET_PERSON_DATA'

let initialState = {
    person: {
        id: null,
        first_name: null,
        last_name: null,
        patronymic: null,
        birthday: null,
        city: null,
        country: null,
        about: null,
        photo: null
    }
}

export const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON_DATA:
            return {
                ...state,
                person: { ...action.person, photo: API_STATIC_MEDIA + action.person.photo}
            }
        default:
            return state
    }
}

const setPerson = (person) => ({ type: SET_PERSON_DATA, person: person })

export const getPerson = () => async (dispatch) => {
    try {
        let response = await personApi.getPerson()
        dispatch(setPerson(response.data[0]))
    }
    catch (e) {
        alert(e)
    }
}