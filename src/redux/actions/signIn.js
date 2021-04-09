import paths from "../paths";

const actions = {
    setEmail: value => ({
        type: paths.signIn.setEmail,
        payload: value
    }),

    setPassword: value => ({
        type: paths.signIn.setPassword,
        payload: value
    }),

    setRememberMe: () => ({
        type: paths.signIn.setRememberMe,
        payload: null
    }),

    setIsLoading: flag => ({
        type: paths.signIn.setIsLoading,
        payload: flag
    }),

    setIsHide: () => ({
        type: paths.signIn.setIsHide,
        payload: null
    }),

    setErrors: errors => ({
        type: paths.signIn.setErrors,
        payload: errors
    })
};

export default actions;