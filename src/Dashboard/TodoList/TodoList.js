
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';
import { connect } from 'react-redux';
import { fetchTodos } from '../../store/actions/todoAction';
import React, { Component } from 'react';
import Spinner from '../../Spinner/Spinner';

class TodoList extends Component {

    componentDidMount() {
        this.props.onFetchTodos(this.props.token, this.props.userId);
    }

    render() {
        //console.log(typeof this.props.todos);

        let todos = <Spinner />;
        if(!this.props.todos.length) todos = <h3>No ToDos Yet.</h3>;
        if(this.props.todos.length) todos = <h3>Display here!!</h3>;
        

        return (
            <ul className='TodoList'>

                { todos }
                
                <TodoItem key='1' id='props.name' task='Get Shit Done!' date='5/31/2021, 11:34:23 PM' />
    
                <TodoItem key='2' id='props.name' task='Whats wrong with you?!' date='5/31/2021, 11:34:23 PM' />
    
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todo.todos,
        loading: state.todo.loading,
        token: state.auth.token,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchTodos: (token, userId) => dispatch(fetchTodos(token, userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);