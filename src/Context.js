import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";
const API = "https://hn.algolia.com/api/v1/search?"
const initialState = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fecthApiData = async (url) => {
        dispatch({ type: "SET_LOADINGS" })
        try {
            const res = await fetch(url);
            const getData = await res.json();
            // console.log(getData);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: getData.hits,
                    nbPages: getData.nbPages,
                }
            })
        } catch (error) {
            console.log(error)
        }
    };

    // To remove the psot

    const removePost = (postID) => {
        dispatch({ type: "REMOVE_POST", payload: postID })
    };

    // To Search data

    const searchPost = (search_posts) => {
        dispatch({ type: "SEARCH_POST", payload: search_posts })
    };


    // NEXT PAGEINATION

    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        })
    }


    // PREV PAGINATION

    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE",
        })
    }


    // get Api Data

    useEffect(() => {
        fecthApiData(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page]);

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}>
            {children}
        </AppContext.Provider>
    );
};

const useGloabalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGloabalContext };