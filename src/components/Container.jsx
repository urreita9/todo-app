import React from 'react'
import { useTodo } from '../context/TodoProvider'
import { TodoContainer } from './TodoContainer'



  

export const Container = () => {

    const{dark, windowDimensions}=useTodo()
 
    const {width} = windowDimensions;
 


    return (
        <div className={`container ${dark?'dark':''}`}>
            <div className='backGround__image' 
            style={width<376
                ?{backgroundImage: dark?'url(/images/bg-mobile-dark.jpg)': 'url(/images/bg-mobile-light.jpg)'}
                :{backgroundImage: dark?'url(/images/bg-desktop-dark.jpg)': 'url(/images/bg-desktop-light.jpg)'}
                }>

            </div>
            
            <div className='backGround__empty'>
                <TodoContainer />
            </div>
            <footer className='footer'>
				<a href='https://github.com/urreita9/todo-app.git/'>GitHub</a>

				<ul>
					<li>👇Other projects👇</li>
					<li>
						<a href='https://patmahomes-store-coderhouse.web.app/'>
							PatMahomes Clone Store (React)
						</a>
					</li>
					<li>
						<a href='https://urreita9.github.io/giphos/'>
							Giphos (Vanilla JS-spanish)
						</a>
					</li>
				</ul>
			</footer>
        </div>
    )
}
