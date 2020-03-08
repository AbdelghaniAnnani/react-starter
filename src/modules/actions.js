export const SELECT_OPTION = "SELECT_OPTION";
export const FILTER = "FILTER";

// actions
export const setOption = option => ({
    type: SELECT_OPTION,
    option: option
});

export const setFilter = filter => ({
    type: FILTER,
    filter: filter
});



