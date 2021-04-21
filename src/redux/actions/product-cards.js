import paths from "../paths";

// image = noImage,
// designer,
// size,
// name,
// price

const _items = [
    {
        id: "0",
        link: "/",
        image: null,
        name: "Lego Soled Rubber Dripped Low Top Sneakers",
        size: "L",
        price: "1000",
        currency: "₽"
    },
    {
        id: "1",
        link: "/",
        image: "https://spin4spin.com/images/thumbnails/267/297/detailed/2860/2000000076829_1.jpg.png",
        name: "Lego Soled Rubber Dripped Low Top Sneakers",
        size: "L",
        price: "1030",
        currency: "₽"
    },
    {
        id: "2",
        link: "/",
        image: "https://spin4spin.com/images/thumbnails/267/297/detailed/2860/2000000076829_1.jpg.png",
        name: "Lego Soled Rubber Dripped Low Top Sneakers",
        size: "L",
        price: "1000",
        currency: "₽"
    },
    {
        id: "3",
        link: "/",
        image: "https://spin4spin.com/images/thumbnails/267/297/detailed/2860/2000000076829_1.jpg.png",
        name: "Lego Soled Rubber Dripped Low Top Sneakers",
        size: "L",
        price: "1000",
        currency: "₽"
    },
    {
        id: "4",
        link: "/",
        image: "https://spin4spin.com/images/thumbnails/267/297/detailed/2860/2000000076829_1.jpg.png",
        name: "Lego Soled Rubber Dripped Low Top Sneakers",
        size: "L",
        price: "1000",
        currency: "₽"
    },
    {
        id: "5",
        link: "/",
        image: "https://spin4spin.com/images/thumbnails/267/297/detailed/2860/2000000076829_1.jpg.png",
        name: "Lego Soled Rubber Dripped Low Top Sneakers",
        size: "L",
        price: "1000",
        currency: "₽"
    }
];

const actions = {
    setItems: items => ({
        type: paths.productCards.setItems,
        payload: items
    }),

    fetchItems: () => dispatch => {
        // загрузка с сервера
        dispatch(actions.setItems(_items));
    },

    setIsLoading: flag => ({
        type: paths.shoppingBag.setIsLoading,
        payload: flag
    }),
};

export default actions;