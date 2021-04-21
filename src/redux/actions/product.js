import { product as api } from "utils/api"
import paths from "../paths";

// const product = {
//     images: [
//         "https://spin4spin.com/images/detailed/2875/2000000077536_1.jpg",
//         "https://spin4spin.com/images/detailed/2875/2000000077536_2.jpg",
//         "https://spin4spin.com/images/detailed/2875/2000000077536_3.jpg",
//         "https://spin4spin.com/images/detailed/2875/2000000077536_4.jpg",
//         "https://spin4spin.com/images/detailed/2875/2000000077536_5.jpg",
//         "https://spin4spin.com/images/detailed/2875/2000000077536_6.jpg",
//     ],
//     id: "0",
//     name: "GIVENCHY LOGO PRINTED DISTRESSED HOODIE",
//     price: 35000,
//     currency: "rub",
//     description: {
//         brand: "Givenchy",
//         size: "L",
//         composition: "100% Хлопок",
//         condition: "Отличное",
//         style: "Luxury",
//         color: "белый",
//         productCode: 2000000077789
//     }
// };

const actions = {
    setIsLoading: flag => ({
        type: paths.product.setIsLoading,
        payload: flag
    }),

    setProduct: product => ({
        type: paths.product.setProduct,
        payload: product
    }),

    fetchProduct: id => dispatch => {
        // загрузка с сервера
        api.getById(id).then(result => {
            console.log(result)
            if (result.status === 200) {
                const data = result.data;
                const product = {
                    images: data.images,
                    id: data.id,
                    name: data.name,
                    price: data.price.ru,
                    currency: "rub",
                    description: {
                        brand: data.brand,
                        size: data.size.ru,
                        composition: data.composition,
                        condition: data.condition,
                        style: data.style,
                        color: data.color[0],
                        productCode: data.vendorCode
                    }
                };
                dispatch(actions.setProduct(product));
            } else {
                // ошибка 404
            }
           
        }, error => {
            console.log(error)
        });
    },
};

export default actions;