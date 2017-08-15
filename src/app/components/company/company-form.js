import React, {Component} from 'react';
import classnames from 'classnames';

export const CompanyForm = (props) => {

    return (
        <div>            
            <form onSubmit={props.submitHandle} id="frm-company">
                <h1>Company Details</h1>

                <div
                    className={classnames("form-group", {'has-error': props.formError.companyId})}>
                    <label className="control-label">Company Id</label>
                    <input
                        type="text"
                        name="companyId"
                        className="form-control"
                        placeholder="Enter Id"
                        onChange={props.handleChange}/> {(props.formError && props.formError.companyId) && <span className="help-block">{props.formError.companyId}</span>}                        
                </div>

               

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Submit
                    </button>
                </div>
        
                <div>                    
                    <h2>Name: {props.companyData.name}</h2>
                    <h3>Business Id: {props.companyData.businessId}</h3>
                    <h3>Registration Date: {props.companyData.registrationDate}</h3>                                  
                </div>
            </form>
        </div>
    );

}

CompanyForm.propTypes = {
    submitHandle: React.PropTypes.func,
    handleChange: React.PropTypes.func
};