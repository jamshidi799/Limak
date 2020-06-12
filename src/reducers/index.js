import { combineReducers } from "redux";
import auth from "./authReducer";
import cloth from "./clothReducer";
import bucket from "./bucketReducer";
import store from "./storeReducer";

const rootReducer = combineReducers({
  auth,
  cloth,
  bucket,
  store,
});

export default rootReducer;
