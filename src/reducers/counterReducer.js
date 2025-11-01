export const counterInitialScore = {
    count: 0
};

export const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1   
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1   
            };
        case 'RESET':
            return counterInitialScore;
        case 'INCREMENT_BY_AMOUNT':
            return {
                ...state,
                count: state.count + action.payload   
            };
    
        default:
            return new Error(`Unknown action type: ${action.type}`);
    }
};