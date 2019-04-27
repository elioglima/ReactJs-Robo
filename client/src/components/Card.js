import React from 'react'

const Card = ({ index, text, onDelete }) => (
    <div className='card'>
        {index}{text}<button onClick={() => onDelete(index)}>X</button>
    </div>
)

export default Card