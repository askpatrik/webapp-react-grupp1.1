// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import topicSortReducer from './topicSortSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
    topicSort: topicSortReducer,
    user: userReducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;