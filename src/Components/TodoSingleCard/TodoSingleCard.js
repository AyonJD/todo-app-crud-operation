import React from 'react';

const TodoSingleCard = ({ task }) => {
    const { name, details } = task;
    return (
        <div className='shadow-md w-1/2 mx-auto py-10'>
            <div className=''>
                <h1 className=''>{name}</h1>
                <p>{details}</p>
            </div>
            <button className='btn btn-info mr-10 text-white'>COMPLETE</button>
            <button className='btn btn-secondary ml-10'>DELETE</button>
        </div>
    );
};

export default TodoSingleCard;