const quarter = (state = [], action) => {
    switch(action.type) {
        case 'SELECT_QUARTER':
            return [
                ...state,
                {
                    value: action.value
                }
            ]
        default:
            return state;
    }
}

export default quarter;