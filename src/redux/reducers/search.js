import paths from "../paths";

const initialState = {
    value: "",
    isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.search.setValue:
            return {
                ...state,
                value: payload
            };
            
        case paths.wishList.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };

        default: 
            return state;
    }
};

export default reducer;