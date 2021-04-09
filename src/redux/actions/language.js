import paths from "../paths";

const actions = {
    setLanguage: items => ({
        type: paths.language.setItems,
        payload: items
    }),

    fetchLanguage: () => dispatch => {
        // загрузка с сервера
        dispatch(actions.setLanguage("ru"));
    },

    setIsLoading: flag => ({
        type: paths.language.setIsLoading,
        payload: flag
    }),

    setIsHide: () => ({
        type: paths.language.setIsHide,
        payload: null
    }),
};

export default actions;