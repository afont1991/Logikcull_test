import { createAction } from "redux-actions";

export const INIT_ALBUM_DATA = "STORE/ALBUM/INIT_ALBUM_DATA";
export const initAlbumData = () => createAction(INIT_ALBUM_DATA)();

export const SET_RAW_ALBUM_DATA = "STORE/ALBUM/SET_RAW_ALBUM_DATA";
export const setRawAlbumData = (data) =>  createAction(SET_RAW_ALBUM_DATA)({ data });

export const SET_NORMALIZED_ALBUM_DATA = "STORE/ALBUM/SET_NORMALIZED_ALBUM_DATA";
export const setNormalizedAlbumData = (data) => createAction(SET_NORMALIZED_ALBUM_DATA)({ data });

export const SUBMIT_FORM = "STORE/ALBUM/SUBMIT_FORM";
export const submitForm = (formName, values) => createAction(SUBMIT_FORM)({ formName, values });

export const LOAD_ALBUM_DETAILS = "STORE/ALBUM/GET_DETAILS";
export const loadAlbumDetails = (albumTitle, artistName) => createAction(LOAD_ALBUM_DETAILS)({ albumTitle, artistName });

export const SET_ALBUM_DETAILS = "STORE/ALBUM/SET_DETAILS";
export const setAlbumDetails = (details) => createAction(SET_ALBUM_DETAILS)({ details });
