import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShowAlertAction } from "../Slices/ShowAlertSlice";
import { WeatherData, WeatherError } from "../Types/WeatherState";

export const FetchWeatherDataThunk = createAsyncThunk(
    'weather/fetch',
    async (countryName:string, {dispatch ,rejectWithValue}) => {
        
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid="yourAppKey"`);

        if(resp.status === 200){
            const data : WeatherData = await resp.json();
            return data;
        }
        const data : WeatherError = await resp.json();
        dispatch(ShowAlertAction(data.message));
        return rejectWithValue(data.message);     
   }
)