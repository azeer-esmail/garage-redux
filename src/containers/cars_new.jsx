import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar, validate } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garageName, values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <div>{error}</div>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )





  render() {
    console.log('form')
    // const { handleSubmit, pristine, reset, submitting } = this.props
    console.log('this.props.pristine',this.props.pristine)
    console.log('this.props.error',this.props.error)
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        {/*<label htmlFor="plate">Plate</label>*/}
          <Field
            // className="form-control"
            label="plate"
            name="plate"
            // component="textarea"
            rows="8"
            component={this.renderField}
          />
          {/*<label htmlFor="owner">Owner</label>*/}
          <Field
            // className="form-control"
            label="owner"
            name="owner"
            component="textarea"
            rows="8"
            component={this.renderField}
          />
          {/*<label htmlFor="brand">Brand</label>*/}
          <Field
            // className="form-control"
            label="brand"
            name="brand"
            component="textarea"
            rows="8"
            component={this.renderField}
          />
          {/*<label htmlFor="model">Model</label>*/}
          <Field
            // className="form-control"
            label="model"
            name="model"
            component="textarea"
            rows="8"
            component={this.renderField}
          />

          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting || this.props.error}>
            Create Car
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garageName: state.garage
  }
}


CarsNew = connect(mapStateToProps,null)(CarsNew)

export default reduxForm({ form: 'newCarForm', validate })(
  connect(null, { createCar })(CarsNew)
);


