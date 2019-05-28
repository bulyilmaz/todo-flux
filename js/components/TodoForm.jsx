import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={ this.onChange }/>
                <button onClick={ event => this.props.addItem(this.state.value) }>Add</button>
            </React.Fragment>
        );
    }
}

export default TodoForm;