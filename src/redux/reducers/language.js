import paths from "../paths";

const initialState = {
    selected: "ru",
    isLoading: false,
    isHide: true,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.language.setSelected:
            return {
                ...state,
                items: [...payload]
            };
            
        case paths.language.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };

        case paths.language.setIsHide:
            return {
                ...state,
                isHide: state.isHide? false : true
            };

        default: 
            return state;
    }
};

export default reducer;