import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/UsersSlice";
import { mainApi } from "./APIs/mainApi";


const combinedReducer = combineReducers({
    users:usersReducer,
    [mainApi.reducerPath]:mainApi.reducer,
});

const rootReducer = (state:any,action:any) => {
    return combinedReducer(state,action);
}
export const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware) 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch