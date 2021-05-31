import './TodoItem.css';

const TodoItem = (props) => {
    console.log(props);

    let todoItem_Box_Task = ['TodoItem_Box-Task'];

    const handleCompleted = () => {
        console.log('COMPLETED');
        // sent the completed to FB
        // change in UI
        todoItem_Box_Task.push('Completed');
        console.log(todoItem_Box_Task);
    }
    const handleDelete = () => {
        console.log('DELETE');
    }


    return (
        <li className='TodoItem' id={props.id}>
            {/* Task Box */}
            <div className='TodoItem_Box'>
                <p className={todoItem_Box_Task.join(' ')}>
                    {props.task}
                </p>

                <p className='TodoItem_Box-Date'>
                    Date: <span>{props.date}</span>
                </p>
            </div>

            {/* buttons  */}
            <div className='TodoItem_Btns'>
                <button type='button' onClick={handleCompleted}>
                    ✅
                </button>
                <button type='button' onClick={handleDelete}>
                    ❌
                </button>
            </div>
        </li>
    )
}

export default TodoItem;