import { FILTER } from "./actions.js";
import _ from "lodash";

const defaultState = {
    filter: "",
};

const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FILTER: {
            return {filter: action.filter};
        }
        default:
            return state;
    }
};
export default filterReducer;
