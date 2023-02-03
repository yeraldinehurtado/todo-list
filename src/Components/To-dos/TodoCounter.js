import React from 'react';

const TodoCounter = ({ allTask, completedTask }) => {
    return (
        <>
            <h2>
                Completed {completedTask} of {allTask} to-dos
            </h2>
        </>
    );
};

export { TodoCounter };
