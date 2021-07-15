const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 20
};

// NOTE: Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: ++state.age
            };
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: action.newValue
            };
        default:
            return state;
    }
};

// NOTE: Store
const store = createStore(rootReducer);
console.log(store.getState());

// NOTE: Subscription
// Dipanggil setiap terjadi dispatch
store.subscribe(() => console.log('Store Change : ', store.getState()));

// NOTE: Dispatching Action
// digunakan untuk melakukan perubahan pada state
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANGE_VALUE', newValue: 100 });
console.log(store.getState());
