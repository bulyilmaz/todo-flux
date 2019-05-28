import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

import * as todoActionTypes from "../actions/todoActionTypes.js";

class TodoStore extends EventEmitter {
    constructor() {
        super();

        this.items = [];
    }

    handleActions(action) {
        switch (action.type) {
            case todoActionTypes.ADD_ITEM:
                this.items = this.items.concat([action.payload.item]);
                this.emit("storeUpdated");

                break;
            case todoActionTypes.DELETE_ITEM:
                const items = this.items;

                items.splice(items.indexOf(action.payload.item), 1);
                this.items = items;
                this.emit("storeUpdated");
        }
    }

    getItems() {
        return this.items;
    }
}

const todoStore = new TodoStore();

dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;