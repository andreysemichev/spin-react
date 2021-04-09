import paths from "../paths";

const initialState = {
    email: "",
    password: "",
    rememberMe: true,
    isLoading: false,
    isHide: true,
    errors: {},
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.signIn.setEmail:
            return {
                ...state,
                email: payload
            };

        case paths.signIn.setPassword:
            return {
                ...state,
                password: payload
            };
        
        case paths.signIn.setRememberMe:
            return {
                ...state,
                rememberMe: state.rememberMe? false : true
            };
            
        case paths.signIn.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };

        case paths.signIn.setIsHide:
            return {
                ...state,
                isHide: state.isHide? false : true
            };

        case paths.signIn.setErrors:
            return {
                ...state,
                errors: {...payload}
            };

        default: 
            return state;
    }
};

export default reducer;