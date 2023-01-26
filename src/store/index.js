// import { createStore,combineReducers } from 'redux'
// could have used combine reducers but used configureStore 
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import authReducer from './auth'

// const counterReducer = (state = {counter : 0,showCounter : true},  action )=>{






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
   reducer: {counter :counterReducer,
            auth: authReducer  
}
});

//if multiples use oblect 
// const store = configureStore({
//     reducers:{
//      counter :counterSlice.reducer,
//      authorization : authorizationSlice.reducers}
//  });
 




export default store;
