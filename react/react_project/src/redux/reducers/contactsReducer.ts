import { API_STATIC_MEDIA, personApi } from "../../api/api"
import { Contact } from "../../types/types";
import { InferActionsTypes } from "../reduxStore";

const SET_CONTACTS_DATA = 'CONTACTS/SET_CONTACTS_DATA'

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof contactsActions>

let initialState = {
    contacts: [] as Array<Contact>
}

export const contactsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_CONTACTS_DATA:
            return {
                ...state,
                contacts: action.contacts.map(c => (
                    { ...c, logo: API_STATIC_MEDIA + c.logo }
                ))
            }
        default:
            return state
    }
}

const contactsActions = {
    setContacts: (contacts: Array<Contact>) => ({ type: SET_CONTACTS_DATA, contacts: contacts } as const)
}

export const getContacts = () => async (dispatch: any) => {
    try {
        let response = await personApi.getContacts()
        dispatch(contactsActions.setContacts(response.data as Array<Contact>))
    } catch (e) {
        alert(e)
    }
}