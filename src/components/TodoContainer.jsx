import React from 'react'
import { useTodo } from '../context/TodoProvider'
import { DragAndDrop } from './DragAndDrop'
import { Filters } from './Filters'
import { Input } from './Input'
import { TitleModeToggle } from './TitleModeToggle'
import { TodoList } from './TodoList'

export const TodoContainer = () => {
   const {todos} = useTodo()
    return (
        <div className='todo__container'>
            <TitleModeToggle/>
            <Input/>
            <TodoList/>
            {todos.length>0 && <Filters/>}
            {todos.length>0 && <DragAndDrop/>}
        </div>
    )
}
