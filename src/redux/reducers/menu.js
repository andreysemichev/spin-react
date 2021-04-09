import paths from "../paths";

const initialState = {
    items: null,
    isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.menu.setItems:
            return {
                ...state,
                items: [...payload]
            };
            
        case paths.menu.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };

        default: 
            return state;
    }
};

export default reducer;