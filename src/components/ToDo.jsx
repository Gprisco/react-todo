import React, { Component } from "react";
import Form from "./Form";
import Item from "./Item";

class ToDo extends Component {
  state = {
    todo: []
  };

  doNothing = () => {};

  //on Form Submit, get the input value and create the activity object,
  //then push it into this.state.todo
  handleAdd = e => {
    e.preventDefault();

    const activity = {
      _id: new Date(),
      name: e.target.elements.todo.value,
      checked: false
    };

    let todo = this.state.todo;
    activity.name !== "" ? todo.push(activity) : this.doNothing();

    this.setState({ todo });
  };

  //on activity Delete, get the id of the activity being deleted,
  //get all the activities from the state except that with the given id
  //then push them back into the state
  handleDelete = id => {
    const todo = this.state.todo;

    const updatedTodo = todo.filter(a => a._id !== id);

    this.setState({ todo: updatedTodo });
  };

  //on Activity Click, Check it (activity.checked = true) based on the given id
  //then push all back into the state
  handleCheck = id => {
    const todo = this.state.todo;

    todo.forEach(a => {
      a._id === id ? (a.checked = !a.checked) : this.doNothing();
    });

    this.setState(todo);
  };

  render() {
    const { todo } = this.state;

    return (
      <React.Fragment>
        <div style={{ background: "#333" }} className="row justify-content-md-center w-100">
          <Form onSubmit={this.handleAdd} />
        </div>
        <div className="row justify-content-md-center mt-4">
          <ul className="list-group w-50">
            {todo.map(activity => (
              <Item
                key={activity._id}
                activity={activity}
                onDelete={this.handleDelete}
                onCheck={this.handleCheck}
              />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default ToDo;
