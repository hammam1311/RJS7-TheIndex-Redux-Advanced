import { SET_AUTHORS } from "../actions/actionTypes"


const initialState = {
    authors: [],
    loading: true
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORS:
            return {
                ...state,
                authors: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default reducer