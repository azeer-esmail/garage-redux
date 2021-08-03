import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garageName);
  }

  renderCars() {
    return this.props.posts.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-item">
            <h3>{car.plate}</h3>
            <p>{car.owner}</p>
            <p>{car.brand}</p>
            <p>{car.model}</p>
          </div>
        </Link>);
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>{this.props.garageName}</h3>
          <Link className="btn btn-primary btn-cta" to="/cars/new">
            Add a car!
          </Link>
        </div>
        <div className="view-container">{this.renderCars()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.cars,
    garageName: state.garage,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
