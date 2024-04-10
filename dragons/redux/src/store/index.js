import { legacy_createStore as createStore } from "redux";
import dragonReducer from "./reducer/dragonReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(
    dragonReducer,
    composeWithDevTools()
)

export default store;
