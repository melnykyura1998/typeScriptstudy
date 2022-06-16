import {AppDispatch, RootState} from "../redax/store";
import {useSelector, TypedUseSelectorHook, useDispatch} from "react-redux";

const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;
const useAppDispatch = ()=> useDispatch<AppDispatch>();

export {
    useAppSelector,
    useAppDispatch
}