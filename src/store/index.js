import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import sessionStorage from "redux-persist/es/storage/session";
import counterReducer from "./slices/counterSlice";

const reducers = combineReducers({
    counter: counterReducer
});

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
    })
});

export default store;