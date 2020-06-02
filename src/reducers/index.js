import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clothReducer from "./clothReducer";

const rootReducer = combineReducers({
  authReducer,
  clothReducer,
});

export default rootReducer;
