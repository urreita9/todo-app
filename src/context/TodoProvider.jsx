import {useState, useContext, createContext, useEffect} from 'react'


const todoContext = createContext()
export function useTodo(){
    return useContext(todoContext)
}
const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};
export const TodoProvider = ({children}) => {
    const [dark, setDark] = useState(false)
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState(init)
    const [filteredTodos, setFilteredTodos] = useState([...todos])
    const [error, setError] = useState('')
    
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
        setFilteredTodos(todos)
    }, [todos])
   
    const handleMode = ()=>{
        setDark(!dark)
    }
    
    const addTodo = (e)=>{
        e.preventDefault()
        if (input.trim().length===0){
            return setError('Can´t be empty')
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: input,
            done:false
        }
        setTodos([...todos, newTodo])
        setInput('')
        setError('')
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

    const filterTodos = (type)=>{
        switch(type){
            case 'all': return setFilteredTodos(todos);
            case 'active': return setFilteredTodos(todos.filter(todo=>todo.done===false));
            case 'completed': return setFilteredTodos(todos.filter(todo=>todo.done===true));
            default:
                return filterTodos;
        }
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
        clearCompleted,
        filterTodos,
        filteredTodos,
        error


    }
    return (
        <todoContext.Provider value={values}>
            {children}
        </todoContext.Provider>
    )
}
