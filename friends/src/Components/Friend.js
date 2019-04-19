import React from 'react'

const Friend = (props) => {
    console.log(props.friend)
  return (
        <div className='ind'>
            <div className='info'>
                <h1>{props.friend.name}</h1>
            </div>
            <div className='info'>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
            </div>
        </div>
    )
}
export default Friend; 