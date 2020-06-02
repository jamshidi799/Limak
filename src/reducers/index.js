import { combineReducers } from "redux";
import auth from "./authReducer";
import cloth from "./clothReducer";

const rootReducer = combineReducers({
  auth,
  cloth,
});

export default rootReducer;
