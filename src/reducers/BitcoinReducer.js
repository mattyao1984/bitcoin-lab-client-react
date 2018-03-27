import BitcoinConstants from '../constants/BitcoinConstants';
import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data: null,
  error: null
});

/**
 * Return the Bitcoin object based on the API data.
 *
 * @param {state} state The initialState of the object
 * @param {action} action The action the user wishes to perform
 * @return {state} {*} Returns the original state or the featured articles object
 * @constructor
 */
function BitcoinReducer(state = initialState, action) {
  switch (action.type) {
    case BitcoinConstants.LOAD_BITCOIN_INFO:
      return Object.assign({}, state, {
        data: null,
        error: null
      });
    case BitcoinConstants.LOAD_BITCOIN_INFO_SUCCESS:
      return Object.assign({}, state, {
        data: action.response,
        error: null
      });
    case BitcoinConstants.LOAD_BITCOIN_INFO_ERROR:
      return Object.assign({}, state, {
        data: null,
        error: action.error
      });
    default:
      return state;
  }
}

export default BitcoinReducer;