import paths from "../paths";

const _items = [
    {
        id: "0",
        link: "/",
        img: "https://spin4spin.com/images/thumbnails/267/297/detailed/2860/2000000076829_1.jpg.png",
        name: "Lego Soled Rubber Dripped Low Top Sneakers",
        price: "1000",
        currency: "₽"
    },
];

const actions = {
    setItems: items => ({
        type: paths.wishList.setItems,
        payload: items
    }),

    fetchItems: () => dispatch => {
        // загрузка с сервера
        dispatch(actions.setItems(_items));
    },

    setIsLoading: flag => ({
        type: paths.wishList.setIsLoading,
        payload: flag
    }),

    setIsHide: () => ({
        type: paths.wishList.setIsHide,
        payload: null
    }),
};

export default actions;