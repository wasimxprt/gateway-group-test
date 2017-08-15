import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';

export const companyFetchDetailsRequest = (companyData) => {

    return (dispatch, getState) => {

        dispatch({
            type: actionTypes.COMPANY_FETCH_SUBMITTED
        })

        //return axios.get("http://avoindata.prh.fi/opendata/bis/v1/" + companyData.companyId)
        return axios.get("http://localhost:3000/api/company/" + companyData.companyId)
            .then(response => {
                let result = JSON.parse(response.data.results.body);
                dispatch({
                    type: actionTypes.COMPANY_FETCH_SUCCESS,
                    data: result.results[0]
                });
            })
            .catch(error => {
                console.log("In errorrr", error)
                dispatch({
                    type: actionTypes.COMPANY_FETCH_FAILURE,
                    error: error.error
                });
            });
    }
}