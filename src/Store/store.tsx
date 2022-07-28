import { configureStore } from "@reduxjs/toolkit";
import { GetWeatherData } from "./Slices/GetWeatherDataSlice";
import { ShowAlertSlice } from "./Slices/ShowAlertSlice";

const store = configureStore({
    reducer:{
        data: GetWeatherData,
        alert: ShowAlertSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispath = typeof store.dispatch;

export default store;