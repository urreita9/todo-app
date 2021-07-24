import React, {useState} from 'react'
import { Input } from './Input'
import { TitleModeToggle } from './TitleModeToggle'

export const TodoContainer = () => {
   
    return (
        <div className='todo__container'>
            <TitleModeToggle/>
            <Input/>
        </div>
    )
}
