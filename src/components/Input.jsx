import React from 'react'
import { useTodo } from '../context/TodoProvider'

export const Input = () => {
    const {input, setInput, addTodo}=useTodo()
    return (
        <div className='input__container'>
            <i className='checkbox'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
            </i>
            <form onSubmit={addTodo}>
                <input type="text" placeholder='Create a new todo...' className='input' value={input} onChange={(e)=>setInput(e.target.value)}/>
            </form>
        </div>
    )
}
