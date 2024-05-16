const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData())

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      dispatch(receivedData(data))
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

// const store = Redux.createStore(
//   asyncDataReducer,
//   Redux.applyMiddleware(ReduxThunk.default)
// );

// case 2: creating a redux app
const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) =>{
    switch (action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state
    }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // Define an action creator for incrementing

const decAction = null; // Define an action creator for decrementing


const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
  );
// Define the Redux store here, passing in your reducers