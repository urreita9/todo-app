import React, {useState} from 'react'
import { useTodo } from '../context/TodoProvider'
const initialFocus = {
    all: true,
    active: false,
    completed: false
}
export const Filters = ({display}) => {
    const [focus, setFocus] = useState(initialFocus)
    const {filterTodos} = useTodo()

    return (
        <div className={display}>
            <button className={`${focus.all?'focus': ''}`} onClick={()=>{
                setFocus(initialFocus);
                filterTodos('all');}}>All</button>
            <button className={`${focus.active?'focus': ''}`} 
                onClick={()=>{
                    setFocus({all: false, active: true, completed: false})
                    filterTodos('active')}}>
                Active
            </button>
            <button className={`${focus.completed?'focus': ''}`} 
                onClick={()=>{
                    setFocus({all:false,active: false, completed: true})
                    filterTodos('completed')}}>
                
                Completed
            </button>
        </div>
    )
}
