import paths from "../paths";

const initialState = {
    isLoading: false,
    id: null,
    images: null,
    name: null,
    price: null,
    currency: null,
    description: null
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.product.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };

        case paths.product.setProduct:
            return {
                ...state,
                id: payload.id,
                images: [...payload.images],
                name: payload.name,
                price: payload.price,
                currency: payload.currency,
                description: {...payload.description}
            };

        default: 
            return state;
    }
};

export default reducer;