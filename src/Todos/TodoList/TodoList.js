import React, { Component } from 'react';
import axios from '../../axios';
import Spinner from '../../Spinner/Spinner';
import './TodoList.css';

class TodoList extends Component {

    state = {
        list: [],
        loading: false,
    }

    componentDidMount () {
        // show spinner 
        this.setState({loading: true});

        // get from axios
        axios.get('/todos.json')
        .then((res) => {
            console.log(res.data);
            let fetchedList = [];

            for (let key in res.data.list) {
                fetchedList.unshift({
                  ...res.data.list[key],
                  id: key,
                });
            }

            console.log(fetchedList);

            // stop the Spinner after success
            this.setState({list:fetchedList, loading: false});
        })
        .catch((err) => this.setState({loading: true}));
    }


    render() {

        let todos = this.state.list.map(el => (
            <li key={el.id}>
                {el.todo} , {el.time}
            </li>
        ));

        if(this.state.loading) todos = <Spinner />;

        return (
            <ul className='TodoList'>
                
                {todos} 

            </ul>
        )
    }
}

export default TodoList;