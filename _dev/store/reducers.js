
// Reducers
// ============
// Reducers for Redux store go here

const initialState = [
    {
        text: 'List item 1',
        id: 1
    }
];

const items = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_ITEM':
            return [
                ...state,
                {
                    text: action.text,
                    id: action.id,
                }
            ]
        default:
            return state;
    }
}

export default items;