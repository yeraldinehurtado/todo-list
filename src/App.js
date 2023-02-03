import { TaskForm } from '../src/Components/Task-form/TaskForm';
import { TodoCounter } from '../src/Components/To-dos/TodoCounter';


const App = () => {
    return (
        <div>
            <TaskForm />
            <TodoCounter allTask={4} completedTask={4} />
        </div>
    );
};

export default App;
