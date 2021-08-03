export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';
export const DELETE_CAR = 'DELETE_CAR';

export function fetchCars(garage) {

  const promis = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
  .then(response => response.json())

  return {
    type: FETCH_CARS,
    payload: promis
  }
}

export function createCar(garage, body, callback) {
  console.log('body',body)
  const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function validate(values = {}){
  const errors = {}
  if (values.plate && values.plate.length > 15 ) {
    errors.plate = 'must be less than 15'
  }
  return errors
}

export function fetchCar(id){
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  }
}

export function deleteCar(history, id){
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`,{ method: 'DELETE' })
    .then(response => response.json())
    .then(() => history.push("/"));

  return {
    type: DELETE_CAR,
    payload: promise
  }
}




