import { combineReducers } from "redux";
import languageReducer from "./Language/reducers";

const rootReducer = combineReducers({
  languageReducer,
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

