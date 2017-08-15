import { combineReducers } from 'redux';
import UserReducer from "./reducer-users";
import ActiveUserReducer from "./reducer-active-user";
import { signupInfo } from "./signup-reducer";
import { signinInfo } from "./signin-reducer";
import { companyInfo } from "./company-reducer";

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    signupData: signupInfo,
    signinData: signinInfo,
    companyData: companyInfo
});

export default allReducers