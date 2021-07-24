import React from 'react'
import { Input } from './Input'
import { TitleModeToggle } from './TitleModeToggle'
import { TodoList } from './TodoList'

export const TodoContainer = () => {
   
    return (
        <div className='todo__container'>
            <TitleModeToggle/>
            <Input/>
            <TodoList/>
        </div>
    )
}
