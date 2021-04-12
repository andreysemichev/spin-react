import paths from "../paths";

const product = {
    images: [
        "https://spin4spin.com/images/detailed/2875/2000000077536_1.jpg",
        "https://spin4spin.com/images/detailed/2875/2000000077536_2.jpg",
        "https://spin4spin.com/images/detailed/2875/2000000077536_3.jpg",
        "https://spin4spin.com/images/detailed/2875/2000000077536_4.jpg",
        "https://spin4spin.com/images/detailed/2875/2000000077536_5.jpg",
        "https://spin4spin.com/images/detailed/2875/2000000077536_6.jpg",
    ],
    id: "0",
    name: "GIVENCHY LOGO PRINTED DISTRESSED HOODIE",
    price: 35000,
    currency: "rub",
    description: {
        brand: "Givenchy",
        size: "L",
        composition: "100% Хлопок",
        condition: "Отличное",
        style: "Luxury",
        color: "белый",
        productCode: 2000000077789
    }
};

const actions = {
    setIsLoading: flag => ({
        type: paths.product.setIsLoading,
        payload: flag
    }),

    setProduct: product => ({
        type: paths.product.setProduct,
        payload: product
    }),

    fetchProduct: () => dispatch => {
        // загрузка с сервера
        dispatch(actions.setProduct(product));
    },
};

export default actions;