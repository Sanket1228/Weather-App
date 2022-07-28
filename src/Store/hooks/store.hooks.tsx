import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispath, RootState } from "../store";

export const useAppDispath= () => useDispatch<AppDispath>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

