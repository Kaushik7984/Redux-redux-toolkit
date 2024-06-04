import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 5, showCounter: true };

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers:{
      increment(state){
        state.counter++;
      },
  
      decrement(state){
        state.counter--;
      },
  
      increse(state, action){
        // state.counter = state.counter + action.amount;
        state.counter = state.counter + action.payload;
      },
  
      togglecounter(state){
        state.showCounter = !state.showCounter;
      }
  
    }
  });

  export const counterAction = counterSlice.actions;


  export default counterSlice.reducer;