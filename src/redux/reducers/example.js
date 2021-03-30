import paths from "../paths";

const initialState = {
    items: [],
    isLoaging: false
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.example.setItems:
            return {
                ...state,
                items: payload
            };
            
        case paths.example.setIsLoading:
            return {
                ...state,
                isLoaging: payload
            };

        default: 
            return state;
    }
};

export default reducer;