import { personApi } from "../../api/api"

const SET_CATEGORIES_DATA = 'SET_CATEGORIES_DATA'

let initialState = {
    categories: []
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_DATA:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state
    }
}

const setCategories = (categories) => ({ type: SET_CATEGORIES_DATA, categories: categories })


export const getCategories = () => async (dispatch) => {
    try {
        let responseCategories = await personApi.getCategories()
        dispatch(setCategories(responseCategories.data))
    } catch (e) {
        alert(e)
    }
}