import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './services/authSlice';
import { productSlice } from './services/productSlice';
import { userSlice } from './services/userSlice';
import counterReducer from './slices/counterSlice';
import { reportSlice } from './services/reportSlice';

const persistConfig = {
    key: 'real_money_admin',
    storage,
    whitelist: ['counter', 'userSlice'], // what to persist
};

const rootReducer = combineReducers({
    [authSlice.reducerPath]: authSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [reportSlice.reducerPath]: reportSlice.reducer,
    counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(authSlice.middleware, productSlice.middleware, userSlice.middleware, reportSlice.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
