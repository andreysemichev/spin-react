import paths from "../paths";

const initialState = {
    isLoading: false,
    html: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.root.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };

        case paths.root.setHtml:
            return {
                ...state,
                html: payload
            };

        default: 
            return state;
    }
};

export default reducer;