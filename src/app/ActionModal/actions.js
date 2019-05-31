import { createAction } from "redux-actions";

export const INIT_MODAL = "STORE/ACTION_MODAL/INIT";
export const initModal = (formData, formType, isDelete = false) => createAction(INIT_MODAL)({ formData, formType, isDelete });

export const OPEN_MODAL = "STORE/ACTION_MODAL/OPEN";
export const openModal = () => createAction(OPEN_MODAL)();

export const CLOSE_MODAL = "STORE/ACTION_MODAL/CLOSE";
export const closeModal = () => createAction(CLOSE_MODAL)();

export const CONFIRM_DELETE = "STORE/ACTION_MODAL/CONFIRM_DELETE";
export const confirmDelete = (formName) => createAction(CONFIRM_DELETE)({ formName });

export const SUBMIT_ALBUM_FORM = "STORE/ACTION_MODAL/SUBMIT";
export const submitAlbumForm = (formName, formType, values) => createAction(SUBMIT_ALBUM_FORM)({ formName, formType, values });