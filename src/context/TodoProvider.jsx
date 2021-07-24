import {useState, useContext, createContext, useEffect} from 'react'


const todoContext = createContext()
export function useTodo(){
    return useContext(todoContext)
}

export const TodoProvider = ({children}) => {
    const [dark, setDark] = useState(false)
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    
    useEffect(()=>{
        console.log(todos)
    }, [todos])
   
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
    };
    const deleteTodo= (id)=>{
        const removeTodo = todos.filter(todo=>todo.id!==id)
        
        setTodos(removeTodo)
    };
    const completeTodo=(id)=>{
        const completed= todos.map((todo)=>{
            if(todo.id===id){
                return {...todo, done: !todo.done};
            } else{
                return todo;
            }
        })
       
        setTodos(completed);
    }
    const clearCompleted = ()=>{
        const clear = todos.filter(todo=>todo.done===false);
        setTodos(clear)
    }
    const values={
        dark,
        handleMode,
        input,
        setInput,
        addTodo,
        todos,
        deleteTodo,
        completeTodo,
        clearCompleted

    }
    return (
        <todoContext.Provider value={values}>
            {children}
        </todoContext.Provider>
    )
}
