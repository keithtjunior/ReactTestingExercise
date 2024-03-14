import React from 'react';


const Count = ({total, heads, tails}) => {
    const text = `${total !== 1 ? 'Out of' : 'In'} ${total} flip${total !== 1 ? 's' : ''}, there ${total !== 1 ? 'have' : 'has'} been ${heads} heads and ${tails} tails.`;
    return (
        <div className='count'>
            <p>{text}</p>
        </div>
    )
}

export default Count