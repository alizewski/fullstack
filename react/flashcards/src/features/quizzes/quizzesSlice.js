import { createSlice } from '@reduxjs/toolkit';
import { addQuizIdForTopic } from '../topics/topicsSlice';

//Slice object
const options = {
  name: "quizzes",
  initialState: {
      quizzes:{}
  },
  reducers: {
    addQuiz: (state, action) => {
      const {id} = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
}

//action creator that returns a thunk
export const addQuizForTopicId = (quiz) => {
  const {topicId, id} = quiz;
  return (dispatch) => {
    //create a new quiz
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    //associate the quiz with its topic
    dispatch(addQuizIdForTopic({topicId: topicId, quizId: id}));
  };
};

//export the slice, action creators, and reducers
export const quizzesSlice = createSlice(options);
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;

//Selector
export const selectQuizzes = (state) => state.quizzes.quizzes;