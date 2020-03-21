import { SET_BOOKS } from "../actions/actionTypes"


const initialState = {
    books: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default reducer