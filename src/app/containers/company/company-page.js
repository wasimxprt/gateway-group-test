import React, { Component } from 'react';
import { connect } from 'react-redux';
import { companyFetchDetailsRequest } from '../../actions/companyActions.js';
import { CompanyForm } from '../../components/company/company-form';

export class CompanyPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companyFormData: {},            
            info: {},
            formErrors: {}
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

        let valObj = {};
        valObj[event.target.name] = event.target.value;
        this.setState(
            Object.assign({}, this.state, {
                companyFormData: Object.assign({}, this.state.companyFormData, valObj)
            })
        )
    }

    handleSubmit = (event) => {
        this.setState(
            Object.assign({}, this.state, {
                formErrors: {}
            })
        )
        event.preventDefault();
        this.props.onSubmit(this.state.companyFormData);
    }


    componentWillUpdate(nextProps, nextState) {
        nextProps.companyData && (nextProps.isPropUpdate === true) ?
            this.setState(
                Object.assign({}, this.state, {
                    formErrors: nextProps.companyData.info
                })
            ) : ""
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-2">
                    <CompanyForm
                        submitHandle={this.handleSubmit}
                        handleChange={this.handleChange}
                        formError={this.props.companyData.info}
                        companyData={this.props.companyData.info}
                    />
                </div>
            </div>
            
        );
    }

}

const mapStateToProps = (state) => {
    return {
        companyData: state.companyData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (companyData) => {
            dispatch(companyFetchDetailsRequest(companyData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);