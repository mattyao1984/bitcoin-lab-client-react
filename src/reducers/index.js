import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import BitcoinReducer from './BitcoinReducer';

const rootReducer = combineReducers({
  BitcoinReducer,
  routing
});

export default rootReducer;