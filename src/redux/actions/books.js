import { SET_BOOKS } from "./actionTypes";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchBooks = () => async dispatch => {
    try {
        const res = await instance.get("/api/books/");
        dispatch({
            type: SET_BOOKS,
            payload: res.data,
        })
    }
    catch (err) {
        console.error(err)
    }
};

