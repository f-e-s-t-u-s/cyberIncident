import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore } from "redux-persist";
import userSlice from "../slice/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// config store
const persistStorage = {
    key: "root",
    storage,
}


const userInfo = persistReducer(persistStorage, userSlice)



export const store = configureStore({
    reducer: {
        userInfo: userInfo,
        middleware: [thunk]
    }
})

export const persistor = persistStore(store)