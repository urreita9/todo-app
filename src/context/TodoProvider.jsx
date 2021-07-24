import {useState, useContext, createContext} from 'react'


const todoContext = createContext()
export function useTodo(){
    return useContext(todoContext)
}

export const TodoProvider = ({children}) => {
    const [dark, setDark] = useState(false)
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    
    console.log(todos)
    const handleMode = ()=>{
        setDark(!dark)
    }
    
    const addTodo = (e)=>{
        e.preventDefault()
        
        const newTodo = {
            id: new Date().getTime(),
            desc: input,
            done:false
        }
        setTodos([...todos, newTodo])
        setInput('')
    }
    const values={
        dark,
        handleMode,
        input,
        setInput,
        addTodo

    }
    return (
        <todoContext.Provider value={values}>
            {children}
        </todoContext.Provider>
    )
}
