import React from 'react';
import { useState, useEffect } from 'react';
import TodoSingleCard from '../TodoSingleCard/TodoSingleCard';

const TodoData = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])
    return (
        <div className='w-full text-center'>
            {
                tasks.map(task => <TodoSingleCard key={task._id} task={task}></TodoSingleCard>)
            }
        </div>
    );
};

export default TodoData;