import React from 'react'
import { useTodo } from '../context/TodoProvider'

export const Input = () => {
    const {input, setInput, addTodo, error}=useTodo()
    return (
        <div className='input__container'>
            <i className='checkbox' onClick={addTodo}>
                {input.length>0 && <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>}
               
            </i>
            {error?<span>{error}</span>: null}
            <form onSubmit={addTodo}>
                <input type="text" placeholder='Create a new todo...' className='input' value={input} onChange={(e)=>setInput(e.target.value)}/>
            </form>
        </div>
    )
}
