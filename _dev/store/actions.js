
// Actions
// ============
// Actions for Redux store go here

const addItem = item => ({
    type: 'ADD_ITEM',
    text: item.text,
    id: item.id,
});

export { addItem };