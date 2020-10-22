import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo, removeTodo, markTodo }from '../../redux/actions/todoActions';
import PropTypes from 'prop-types';
import './NewTodoForm.css';
import './TodoListItem.css';
export function TodosPage( {createTodo, removeTodo, markTodo,  ...props}) {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        createTodo(inputValue);
    }
    const handleRemove = (text) =>{
        removeTodo(text);
    }
    const handleMark = (text) =>{
        markTodo(text);
    }
    return (
        <>
        <div className="new-todo-form">
            <form action="" onSubmit={handleSubmit}>
                <h2>Add To Do</h2>
                    <input type="text" 
                    className="new-todo-input"
                    placeholder="Add To Do"
                    value={inputValue}
                    onChange={ (e) => setInputValue(e.target.value)}
                    />
                    <input type="submit" className="new-todo-button" value="Create To do"/>
            </form>
            </div>
                {
                props.todo.map(t => {
                    return(
                        <div key={t} className="todo-item-container">
                            <h5> {t} </h5>
                            <div className="buttons-container">
                                <button className="completed-button">Mark As Completed</button>
                                <button className="remove-button" onClick={() => handleRemove(t)}>Remove</button>   
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}

TodosPage.propTypes = {
    createTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired
}
function mapStateToProps (state){
    return {
        todo: state.todo
    }
}
const mapDispatchToProps = {
    createTodo,
    removeTodo,
    markTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
