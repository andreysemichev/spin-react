import paths from "../paths";

const initialState = {
    isLoading: false,
    condition: null,
    conditionIsHide: false,
    size: null,
    sizeIsHide: false,
    designer: null,
    designerIsHide: false
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paths.filters.setItems:
            return {
                ...state,
                condition: [...payload.condition],
                size: [...payload.size],
                designer: [...payload.designer],
            };
            
        case paths.filters.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };

        case paths.filters.setConditionIsHide:
            return {
                ...state,
                conditionIsHide: state.conditionIsHide? false : true
            };

        case paths.filters.setSizeIsHide:
            return {
                ...state,
                sizeIsHide: state.sizeIsHide? false : true
            };

        case paths.filters.setDesignerIsHide:
            return {
                ...state,
                designerIsHide: state.designerIsHide? false : true
            };

        default: 
            return state;
    }
};

export default reducer;