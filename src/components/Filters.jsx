import React from 'react'
import { useTodo } from '../context/TodoProvider'

export const Filters = ({display}) => {
    
    const { focus, setFocus} = useTodo()

    return (
        <div className={display}>
            <button className={`${focus.all?'focus': ''}`} onClick={()=>{
                setFocus({all: true, active: false, completed: false});}}
                >All</button>
            <button className={`${focus.active?'focus': ''}`} 
                onClick={()=>{
                    setFocus({all: false, active: true, completed: false})}}>
                Active
            </button>
            <button className={`${focus.completed?'focus': ''}`} 
                onClick={()=>{
                    setFocus({all:false,active: false, completed: true})}}>
                
                Completed
            </button>
        </div>
    )
}
