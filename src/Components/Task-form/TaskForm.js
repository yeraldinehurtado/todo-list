import {useState} from 'react';

export const TaskForm = () => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Escribe tu tarea' onChange={(e) => setText(e.target.value)}
            />
            <button>Guardar</button>
        </form>
    )
}