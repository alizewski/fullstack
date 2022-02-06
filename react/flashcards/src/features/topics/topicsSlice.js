import { createSlice } from '@reduxjs/toolkit';

//Slice object
const options = {
  name: "topics",
  initialState: {
    topics:{}
  },
  reducers: {
    addTopic: (state, action) => {
      const {id, name, icon} = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: []
      };
    },
    //adds a quiz's id to the quizIds array of the topic the quiz belongs to
    addQuizIdForTopic: (state, action) => {
      const {topicId, quizId} = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
}
  
export const topicsSlice = createSlice(options);
export const {addTopic, addQuizIdForTopic} = topicsSlice.actions;
export default topicsSlice.reducer;

//Selector
export const selectTopics = (state) => state.topics.topics;