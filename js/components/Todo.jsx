import React from "react";

import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";

import { addItem } from "../actions/addItemAction.js";
import { deleteItem } from "../actions/deleteItemAction.js";

import TodoStore from "../stores/TodoStore.js";

class Todo extends React.Component {
    constructor() {
        super();

        this.state = {
            items: TodoStore.getItems()
        };

        this.onStoreUpdated = this.onStoreUpdated.bind(this);
    }

    componentDidMount() {
        TodoStore.on("storeUpdated", this.onStoreUpdated);

        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then(items => {
                items.map(item => {
                    addItem(item);
                });
            });
    }

    onStoreUpdated() {
        this.setState({
            items: TodoStore.getItems()
        });
    }

    render() {
        return (
            <div className="todo">
                <h1>{ this.props.message }</h1>
                <TodoList items={ this.state.items } deleteItem={ deleteItem }/>
                <TodoForm addItem={ addItem }/>
            </div>
        );
    }
}

export default Todo;

