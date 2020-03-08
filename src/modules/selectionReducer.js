import { SELECT_OPTION } from "./actions.js";
import _ from "lodash";

const defaultState = {
    option: "",
};

const selectReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_OPTION: {
            return {options: action.option};
        }
        default:
            return state;
    }
};
export default selectReducer;
