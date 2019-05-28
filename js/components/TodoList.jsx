import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                { this.props.items.map((item, index) => (
                    <li key={ index }><span>{ item }</span> (<a href="javascript:;" onClick={ event => this.props.deleteItem(item) }>Delete</a>)</li>
                )) }
            </ul>
        );
    }
}

export default TodoList;