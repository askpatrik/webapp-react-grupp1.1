// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import topicSortReducer from './topicSortSlice';
import userReducer from './userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    topicSort: topicSortReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store)