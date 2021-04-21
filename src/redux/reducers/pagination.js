import paths from "../paths";

const initialState = {
    isLoading: false,
    currentPage: 0,
    allPageCount: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.pagination.setAllPageCount:
            return {
                ...state,
                allPageCount: payload
            };
            
        case paths.pagination.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };

        default: 
            return state;
    }
};

export default reducer;