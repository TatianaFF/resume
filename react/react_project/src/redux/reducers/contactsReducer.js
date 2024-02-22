import { API_STATIC_MEDIA, personApi } from "../../api/api"

const SET_CONTACTS_DATA = 'SET_CONTACTS_DATA'

let initialState = {
    contacts: []
}

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS_DATA:
            return {
                ...state,
                contacts: action.contacts.map(c => (
                    {...c, logo: API_STATIC_MEDIA + c.logo}
                ))
            }
        default:
            return state
    }
}

const setContacts = (contacts) => ({ type: SET_CONTACTS_DATA, contacts: contacts })

export const getContacts = () => async (dispatch) => {
    try {
        let response = await personApi.getContacts()
        dispatch(setContacts(response.data))
    } catch (e) {
        alert(e)
    }
}