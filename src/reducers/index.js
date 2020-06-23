import { combineReducers } from "redux";
import auth from "./authReducer";
import cloth from "./clothReducer";
import bucket from "./bucketReducer";
import store from "./storeReducer";
import common from "./commonReducer";

const rootReducer = combineReducers({
  auth,
  cloth,
  bucket,
  store,
  common,
});

export default rootReducer;
