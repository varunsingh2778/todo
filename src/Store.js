import mainReducer from "./reducers/main";
import { legacy_createStore as createStore } from "redux";

const store = createStore(mainReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;