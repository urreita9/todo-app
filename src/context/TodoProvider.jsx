import {useState, useContext, createContext, useEffect} from 'react'


const todoContext = createContext()

export function useTodo(){
    return useContext(todoContext)
}

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };

export const TodoProvider = ({children}) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [dark, setDark] = useState(false)
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState(init)
    const [filteredTodos, setFilteredTodos] = useState([...todos])
    const [error, setError] = useState('')

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
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
    
    const reOrder = (list, startIndex, endIndex)=>{
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    const values={
        windowDimensions,
        dark,
        handleMode,
        input,
        setInput,
        addTodo,
        todos,
        setTodos,
        deleteTodo,
        completeTodo,
        clearCompleted,
        filterTodos,
        filteredTodos,
        setFilteredTodos,
        error,
        reOrder


    }
    return (
        <todoContext.Provider value={values}>
            {children}
        </todoContext.Provider>
    )
}
