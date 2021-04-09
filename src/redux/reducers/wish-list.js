import paths from "../paths";

const initialState = {
    items: null,
    isLoading: false,
    isHide: true,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.wishList.setItems:
            return {
                ...state,
                items: [...payload]
            };
            
        case paths.wishList.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };

        case paths.wishList.setIsHide:
            return {
                ...state,
                isHide: state.isHide? false : true
            };

        default: 
            return state;
    }
};

export default reducer;