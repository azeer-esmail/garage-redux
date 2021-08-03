import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCar, deleteCar } from '../actions';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleDelete = () => {
    console.log(this.props.match.params.id)
    this.props.deleteCar(this.props.history, this.props.match.params.id)
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="car-item">
          <h3>{this.props.car.plate}</h3>
          <p>{this.props.car.owner}</p>
          <p>{this.props.car.brand}</p>
          <p>{this.props.car.model}</p>
        </div>
        <button className="btn-danger" onClick={this.handleDelete}>Delete</button>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(car => car.id === idFromUrl);
  return { car: car };
}

function mapDispatchToProps(dispatch) {
return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);





