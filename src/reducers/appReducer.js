"use strict";

import {RECEIVE_VALUE_PENDING, RECEIVE_VALUE_FULFILLED, RECEIVE_VALUE_REJECTED} from "../actions/appActions";

const INIT={
    key: "null",

    fetching: false,
    fetched: false,

    error: ""
};

export default function reducer(state = INIT, action) {
    switch (action.type) {
        case RECEIVE_VALUE_PENDING: {
            state = Object.assign({}, state, {fetched: false, fetching: true});
            
            break;
        }

        case RECEIVE_VALUE_FULFILLED: {
            console.log(action);

            state = Object.assign({}, state, {fetched: true, fetching: false, key: action.payload});
            
            break;
        }

        case RECEIVE_VALUE_REJECTED: {
            state = Object.assign({}, state, {fetched: false, fetching: false, error: action.payload});
            
            break;
        }
    }

    return state;
};