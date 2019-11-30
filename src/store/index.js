import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import home from "./reducers/home";
import user from "./reducers/user"
const reducers = combineReducers({
    home,
    user
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;