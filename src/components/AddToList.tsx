import React, { useState } from 'react'
import {IState as Props } from './Home'

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
    people: Props['people']
}

export const AddToList: React.FC<IProps> =({setPeople, people}) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        note: '',
        img: '',
        diet:''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(
            !input.name || 
            !input.age ||
            !input.img ||
            !input.diet
        ) {
        return
        }

        setPeople([
            ...people, 
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note,
                diet: input.diet
            }
        ])

        setInput({
            name: '',
            age: '',
            note: '',
            img: '',
            diet: ''
        })

    }

  return (
    <>
        <div className="AddToList">
            <input type="text" placeholder='Name' className='AddToList-input' value={input.name} name='name' onChange={handleChange}/>
            <input type="text" placeholder='Age' className='AddToList-input' value={input.age} name='age' onChange={handleChange}/>
            <input type="text" placeholder='Image Url' className='AddToList-input' value={input.img} name='img' onChange={handleChange}/>
            <textarea placeholder='Notes' className='AddToList-input' value={input.note} name='note' onChange={handleChange}/>
            <input placeholder='Diet' className='AddToList-input' value={input.diet} name='diet' onChange={handleChange}/>
            
            <button className='AddToList-btn' onClick={handleClick}>
                RSVP
            </button>
        </div>
        <a href='/activies' className='AddToList-btn'>Choose your activities</a>
    </>
  )
}
 