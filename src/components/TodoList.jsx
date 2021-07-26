import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useTodo } from '../context/TodoProvider'
import { Filters } from './Filters'

export const TodoList = () => {
    const {todos, filteredTodos, deleteTodo, completeTodo, clearCompleted, reOrder, setTodos, windowDimensions} =useTodo()
    const {width} = windowDimensions;
    const itemsLeft = filteredTodos.filter(todo=>todo.done===false);
    return (
        <DragDropContext onDragEnd={(result)=>{
            const {source, destination} = result;
            if(!destination){
                return;
            };
            if((source.index === destination.index)&&
             (source.droppableId===destination.droppableId)){
                return;
            }

            setTodos(prev=> reOrder(prev,source.index,destination.index ))


        }}>
            <Droppable droppableId='todos'>
                {(droppableProvided)=>(
                <ul 
                    {...droppableProvided.droppableProps} 
                    ref={droppableProvided.innerRef}
                    className='todoList__container'>
                    {filteredTodos.map(({desc, id, done},index)=> (
                        <Draggable key={id} draggableId={`${id}`} index={index}>
                           {(draggableProvided)=>( 
                            <li {...draggableProvided.draggableProps}  
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.dragHandleProps}
                                className='todoList__item border'>
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
                                </li>)}
                        </Draggable>
                    ))}
                    {droppableProvided.placeholder}
                    {todos.length>0 &&  
                    
                    <li className='todoList__item'>
                    
                            <span className='itemsLeft'>
                                {`${itemsLeft.length} items left`} 
                                
                            </span>
                            {width>376?<Filters display={'input__container__desktop'}/>:null}
                            <span  className='clearCompleted' onClick={clearCompleted}>Clear Completed</span>
                    
                    </li>}
                
                </ul>)}
            </Droppable>
        </DragDropContext>
    )
}
