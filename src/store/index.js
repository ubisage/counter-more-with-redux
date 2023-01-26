// import { createStore,combineReducers } from 'redux'
// could have used combine reducers but used configureStore 
import { createSlice,configureStore } from '@reduxjs/toolkit';

// const counterReducer = (state = {counter : 0,showCounter : true},  action )=>{
const initialState = {counter: 0, showCounter : true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++ //still have imutable code because internal emir paskage in redux toolkit
        },
        decrement(state) {state.counter--},
        increase(state,action) {
            state.counter= state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter= !state.showCounter
        },
    }
});


// -------------------------------------------------------
// used reduxtoolkit instead of this

// const counterReducer = (state = initialState,  action )=>{
//     if(action.type === 'increment'){
//         return{
//             counter : state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'increase'){
//         return{
//             counter : state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'decrement'){
//         return{
//             counter : state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter : state.counter
//         }
//     }
//     return state
// };

// const store = createStore(counterSlice.reducer);
 const store = configureStore({
   reducer: counterSlice.reducer
});

//if multiples use oblect 
// const store = configureStore({
//     reducers:{
//      counter :counterSlice.reducer,
//      authorization : authorizationSlice.reducers}
//  });
 

export const counterActions = counterSlice.actions;

export default store;
