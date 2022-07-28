import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertState } from "../Types/AlertState";

const initialState: AlertState = {
    alertText: "",
    showAlert: false
}

const showAlertSlice = createSlice({
    name:"alert",
    initialState,
    reducers: {
        ShowAlertAction : (state, action:PayloadAction<string>) => {
            return {alertText: action.payload, showAlert: true}
        },
        DismissAlertAction: (state) => {
            return {alertText: "", showAlert:!state.showAlert}
        }
    }
})

export const { ShowAlertAction, DismissAlertAction } = showAlertSlice.actions;

export const ShowAlertSlice = showAlertSlice.reducer;