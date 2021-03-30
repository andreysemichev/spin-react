import paths from "../paths";

export default {
    setItems: items => ({
        type: paths.example.setItems,
        payload: items
    }),

    setIsLoading: flag => ({
        type: paths.example.setIsLoading,
        payload: flag
    })
};
