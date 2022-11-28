import React from 'react'

type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
        <h2>
            {props.isLoggedIn
            ? `Greet ${props.name}, you have ${props.messageCount} emails in your inbox`
            : `Please RSVP by 12/12/2022`}
            </h2>
    </div>
  )
}

export default Greet