import { TodoCounter } from '../src/Components/To-dos/TodoCounter';

const App = () => {
    return (
        <div>
            <TodoCounter allTask={4} completedTask={4} />
        </div>
    );
};

export default App;
