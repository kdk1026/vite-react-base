import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import counterReducer from "./slices/counterSlice";
import sessionStorage from "redux-persist/lib/storage/session";

const reducers = combineReducers({
    counter: counterReducer
});

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['counter']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        }),
    devTools: import.meta.env.MODE !== 'prod',
});

export default store;