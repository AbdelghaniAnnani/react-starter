import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import selectReducer from "./selectionReducer";
import filterReducer from "./filterReducer";
import { combineReducers } from 'redux'

const combinedReducer = combineReducers({
    filterReducer,
    selectReducer
});

export default function configureStore(initialState) {
    return createStore(combinedReducer, initialState, applyMiddleware(logger));
}
