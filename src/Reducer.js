const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADINGS":
            return {
                ...state,
                isLoading: true,
            };

        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            };
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((curId) => {
                    return curId.objectID !== action.payload;
                })
            };

        case "SEARCH_POST":
            return {
                ...state,
                query: action.payload,
            };

        case "NEXT_PAGE" :
            return {
                ...state,
                page: state.page + 1,
            };

        case "PREV_PAGE" :
            return {
                ...state,
                page : state.page - 1,
            };
    };
    return state;
};

export default reducer;