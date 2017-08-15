import * as actionTypes from "../constants/actionTypes.js";

export function companyInfo(state = {}, action) {
    switch (action.type) {
        case actionTypes.COMPANY_FETCH_SUBMITTED:
            return Object.assign({}, state, {
                isPropUpdate: false,
            });
        case actionTypes.COMPANY_FETCH_SUCCESS:
            return Object.assign({}, state, {
                info: action.data,
                data: state.data,
                isPropUpdate: false
            });
        case actionTypes.COMPANY_FETCH_FAILURE:
            console.log("Fails ", action)
            return Object.assign({}, state, {
                info: action.error.error,
                data: state.data,
                isPropUpdate: true
            });
        default:
            return state;
    }
}