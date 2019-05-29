import { createAction } from "redux-actions";

export const IS_LOADING = "STORE/LOADER/IS_LOADING";
export const isLoading = (name) =>  createAction(IS_LOADING)({ name });

export const IS_READY = "STORE/LOADER/IS_READY";
export const isReady = (name) => createAction(IS_READY)({ name });