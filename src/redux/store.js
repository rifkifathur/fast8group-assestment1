import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { personnelreducer } from "./personnellist/personnelreducer";

export const store = createStore(personnelreducer, applyMiddleware(thunk));