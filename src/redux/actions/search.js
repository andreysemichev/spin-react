import paths from "../paths";

const actions = {
    setIsLoading: flag => ({
        type: paths.search.setIsLoading,
        payload: flag
    }),

    setValue: value => ({
        type: paths.search.setValue,
        payload: value
    }),
};

export default actions;