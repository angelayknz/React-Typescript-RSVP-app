import React from 'react'
import {IState as IProps } from './Home'

// interface IProps {
//   people: {
//     name: string
//     age: number
//     url: string
//     note?: string
//   }[]
// }

const List: React.FC<IProps> = ({people}) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} alt="" className="List-img" />
            <h2>{person.name}</h2>
          </div>
          <p className='List-age'>{person.age} years old</p>
          <p><div className="List-note">{person.note}</div></p>
          <p>{person.diet}</p>
        </li>
      )
  })
}

  return (
    <ul>
      {renderList()}
    </ul>
  )

}
  
export default List