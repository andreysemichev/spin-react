import paths from "../paths";

const _items = {
    condition: [ "new", "good", "bad", "two words" ],
    size: [ "XXS", "XS", "S", "M", "L", "XL", "XXL", "OS" ],
    designer: [
        "Alain Mikli",
        "Alexander Wang",
        "Ami",
        "Celine",
        "Chapter",
        "Cott Weiler",
        "Delirious",
        "Diesel",
        "Dior",
        "Fabric - Brand Co",
        "Fear of God",
        "Fendi",
        "Haider Ackermann Haider Ackermann",
        "Hermes",
        "Humble",
        "JACQUEMUS",
        "Jimmy Choo",
        "Julius",
        "Lanvin",
        "Levis",
        "Loewe",
        "Paolo Pecora",
        "Pigalle",
        "Prada",
    ]
};

const actions = {
    setItems: items => ({
        type: paths.filters.setItems,
        payload: items
    }),

    fetchItems: () => dispatch => {
        // загрузка с сервера
        dispatch(actions.setItems(_items));
    },

    setIsLoading: flag => ({
        type: paths.filters.setIsLoading,
        payload: flag
    }),

    setConditionIsHide: () => ({
        type: paths.filters.setConditionIsHide,
        payload: null
    }),

    setSizeIsHide: () => ({
        type: paths.filters.setSizeIsHide,
        payload: null
    }),

    setDesignerIsHide: () => ({
        type: paths.filters.setDesignerIsHide,
        payload: null
    }),
};

export default actions;