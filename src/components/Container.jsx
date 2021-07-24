import React from 'react'
import { useTodo } from '../context/TodoProvider'
import { TodoContainer } from './TodoContainer'

export const Container = () => {
    const{dark}=useTodo()
    return (
        <div className={`container ${dark?'dark':''}`}>
            <div className='backGround__image' style={{backgroundImage: dark?'url(/images/bg-mobile-dark.jpg)': 'url(/images/bg-mobile-light.jpg)'}}>

            </div>
            <TodoContainer />
            <div className='backGround__empty'>

            </div>
        </div>
    )
}
