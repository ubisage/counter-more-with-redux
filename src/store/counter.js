import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = {counter: 0, showCounter : true, }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

export default counterSlice.reducer
export const counterActions = counterSlice.actions;