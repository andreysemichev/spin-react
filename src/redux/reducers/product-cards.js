import paths from "../paths";

const initialState = {
    isLoading: false,
    items: null,
    setIsLoading: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.productCards.setItems:
            return {
                ...state,
                items: payload
            };

        case paths.productCards.setIsLoading:
            return {
                ...state,
                setIsLoading: payload
            };

        default: 
            return state;
    }
};

export default reducer;