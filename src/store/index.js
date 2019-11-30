import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import home from "./reducers/home";
const reducers = combineReducers({
    home
})

const store = createStore(reducers, applyMiddleware(reduxThunk));


export default store;