import React from 'react'
import { useTodo } from '../context/TodoProvider'

export const TodoList = () => {
    const {todos, filteredTodos, deleteTodo, completeTodo, clearCompleted} =useTodo()

    const itemsLeft = filteredTodos.filter(todo=>todo.done===false);
    return (
        <ul className='todoList__container'>
            {filteredTodos.map(({desc, id, done},index)=> (
                <li key={index} className='todoList__item border'>
                    <div className='todo__list__left' onClick={()=>completeTodo(id)}>
                    <i className={`checkbox ${done?'done':''}`} >
                        {done &&   
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                            <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                        </svg>}
                      
                    </i>
                    <span className={`todoList__item__text ${done?'completed': ''}`} >{desc}</span>
                    </div>
                    <i className='cross' onClick={()=>deleteTodo(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                            <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
                        </svg>
                    </i>
                </li>
            ))}
            {todos.length>0 &&  
            
            <li className='todoList__item'>
              
                    <span className='itemsLeft'>
                        {`${itemsLeft.length} items left`} 
                         
                    </span>
               
                    <span  className='clearCompleted' onClick={clearCompleted}>Clear Completed</span>
              
            </li>}
           
        </ul>
    )
}
