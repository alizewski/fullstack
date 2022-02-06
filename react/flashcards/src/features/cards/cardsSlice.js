import { createSlice } from '@reduxjs/toolkit';

//Slice object
const options = {
  name: "cards",
  initialState: {
    cards:{}
  },
  reducers: {
    addCard: (state, action) => {
      const {id} = action.payload;
      state.cards[id] = action.payload;
    }
  }
}
  
export const cardsSlice = createSlice(options);
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;

//Selector
export const selectCards = (state) => state.cards.cards;