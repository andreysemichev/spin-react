import paths from "../paths";

const initialState = {
    items: null,
    isLoading: false,
    isHide: true,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.shoppingBag.setItems:
            return {
                ...state,
                items: [...payload]
            };
            
        case paths.shoppingBag.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };

        case paths.shoppingBag.setIsHide:
            return {
                ...state,
                isHide: state.isHide? false : true
            };

        default: 
            return state;
    }
};

export default reducer;