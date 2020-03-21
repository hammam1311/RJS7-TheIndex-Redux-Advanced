import { SET_AUTHORS } from "./actionTypes";
import axios from "axios";
import Loading from "../../Loading";

const instance = axios.create({
    baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthors = () => async dispatch => {
    try {
        const res = await instance.get("/api/authors/");
        dispatch({
            type: SET_AUTHORS,
            payload: res.data,
        })
    }
    catch (err) {
        console.error(err)
    }
};