import { legacy_createStore as createStore, combineReducers } from 'redux';
import dragonReducer from './reducer/dragonReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import knightReducer from './reducer/knightReducer';

const rootReducer = combineReducers({
  dragons: dragonReducer,
  knights: knightReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

/*before combining reducer for only one reducer:
const store = createStore(
    dragonReducer,
    composeWithDevTools()
)
*/

export default store;
