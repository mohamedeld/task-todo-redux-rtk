import {TypedUseSelectorHook,useDispatch,useSelector} from "react-redux";
import { ApplicationState,ApplicationDispatch } from "./store";

export const useApplicationState:TypedUseSelectorHook<ApplicationState> = useSelector;

export const useAppDispatch : ()=> ApplicationDispatch = useDispatch;
