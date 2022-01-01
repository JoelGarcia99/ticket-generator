import { types } from "../types";

export const defineTicket = (ticket) =>({
    type: types.define,
    payload: ticket
});