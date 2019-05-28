import dispatcher from "../dispatcher.js";
import * as todoActionTypes from "./todoActionTypes";

export function addItem(item) {
    dispatcher.dispatch({
        type: todoActionTypes.ADD_ITEM,
        payload: {
            item
        }

    });
}