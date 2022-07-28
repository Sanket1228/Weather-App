import { createSlice } from "@reduxjs/toolkit";
import { FetchWeatherDataThunk } from "../ThunkActions/FetcheWeatherData";
import { WeatherState } from "../Types/WeatherState";
import { ShowAlertAction } from "./ShowAlertSlice";

const initialState:WeatherState = {
    data: null,
    loading: false,
    error: '',
}
    
const GetWeatherDataSlice = createSlice({
    name:"getWeatherData",
    initialState,
    reducers : {

    },
    extraReducers: (builder) => {
        builder.addCase(FetchWeatherDataThunk.pending, (state) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(FetchWeatherDataThunk.fulfilled, (state, {payload}) => {
            state.data = payload;
            state.loading = false;
            state.error = "";
        });
        builder.addCase(FetchWeatherDataThunk.rejected, (state, action) => {
            state.error = String(action.payload).toString();
            ShowAlertAction(state.error);
        })
    },
})

export const GetWeatherData = GetWeatherDataSlice.reducer;

