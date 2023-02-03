import React from 'react';

const TodoCounter = ({ allTask, completedTask }) => {
    return (
        <>
            <h2 className='todoCounter'>
                Completed {completedTask} of {allTask} to-dos
            </h2>
        </>
    );
};

export { TodoCounter };
