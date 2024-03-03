import { personApi } from "../../api/api"
import { Category } from "../../types/types";
import { InferActionsTypes } from "../reduxStore";

const SET_CATEGORIES_DATA = 'CATEGORIES/SET_CATEGORIES_DATA'

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof categoriesActions>

let initialState = {
    categories: [] as Array<Category>
}

export const categoriesReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

const categoriesActions = {
    setCategories: (categories: Array<Category>) => ({ type: SET_CATEGORIES_DATA, categories: categories } as const)
}


export const getCategories = () => async (dispatch: any) => {
    try {
        let responseCategories = await personApi.getCategories()
        dispatch(categoriesActions.setCategories(responseCategories.data as Array<Category>))
    } catch (e) {
        alert(e)
    }
}