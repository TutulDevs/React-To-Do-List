import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem";
import { connect } from "react-redux";
import { fetchTodos } from "../../store/actions/todoAction";
import Spinner from "../../Spinner/Spinner";

class TodoList extends Component {
  componentDidMount() {
    this.props.onFetchTodos(this.props.token, this.props.userId);
  }

  render() {
    let todoArr = [];
    for (let key in this.props.todos) {
      todoArr.unshift({
        ...this.props.todos[key],
        id: key,
      });
    }

    let todos = <h3>No ToDos Yet.</h3>;
    if (this.props.loading) todos = <Spinner />;
    if (todoArr.length >= 1)
      todos = todoArr.map((el) => (
        <TodoItem
          key={el.id}
          task={el.todo}
          date={el.date}
          id={el.id}
          completed={el.completed}
        />
      ));

    return <ul className='TodoList'>{todos}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    loading: state.todo.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTodos: (token, userId) => dispatch(fetchTodos(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
