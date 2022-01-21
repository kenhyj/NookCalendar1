// from ken: this is merely a sample from my traceify repo
// https://github.com/kenhyj/Traceify/blob/master/client/src/redux/index.js

import { combineReducers } from "redux";
import loginReducer from "./reducers/login-reducer";

// This is where you import all the reducers and combine it into one
export default combineReducers({
  loginReducer: loginReducer,
});

// https://www.crowdbotics.com/blog/use-redux-hooks-in-react-native-app