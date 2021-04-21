import paths from "../paths";

const actions = {
    setItems: items => ({
        type: paths.pagination.setAllPageCount,
        payload: items
    }),

    fetchItems: () => dispatch => {
        // загрузка с сервера
        dispatch(actions.setItems(10));
    },

    setIsLoading: flag => ({
        type: paths.pagination.setIsLoading,
        payload: flag
    }),
};

export default actions;