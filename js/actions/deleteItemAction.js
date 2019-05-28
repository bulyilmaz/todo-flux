import dispatcher from "../dispatcher.js";
import * as todoActionTypes from "./todoActionTypes";

export function deleteItem(item) {
    dispatcher.dispatch({
        type: todoActionTypes.DELETE_ITEM,
        payload: {
            item
        }
    });
}
