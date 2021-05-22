// TODO: alertas, msg, etc

import { typesUi as types } from "../types";

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});