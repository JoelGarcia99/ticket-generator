import { types } from "../types";

const initS = {
    title: "",
    description: "",
    offset: 1,
    columns: 1,
    showNumbers: true,
    quantity: 1
};

export const ticketReducer = (state = initS, action) => {

    switch(action.type) {
        case types.define: {
            return action.payload;
        }
        default: return state;
    }
};