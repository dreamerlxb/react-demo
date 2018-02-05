"use strict";

import { AUTH_FAIL, AUTH_SUCCESS } from '../constants';

const initialState = {
    isAuthenticated: false
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTH_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}

export default reducers;