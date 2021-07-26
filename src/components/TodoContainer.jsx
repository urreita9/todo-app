import React from 'react'
import { useTodo } from '../context/TodoProvider'
import { DragAndDrop } from './DragAndDrop'
import { Filters } from './Filters'
import { Input } from './Input'
import { TitleModeToggle } from './TitleModeToggle'
import { TodoList } from './TodoList'

export const TodoContainer = () => {
   const {todos, windowDimensions} = useTodo()
   const {width} = windowDimensions;
    return (
        <div className='todo__container'>
            <TitleModeToggle/>
            <Input/>
            <TodoList/>
            {width<376? (todos.length>0 && <Filters display={'input__container'}/>): null}
            {todos.length>0 && <DragAndDrop/>}
        </div>
    )
}
