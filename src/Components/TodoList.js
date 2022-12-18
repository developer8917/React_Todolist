import './TodoList.scss';
import TodoListItem from './TodoListItem';

// App.js에서 만든 todos를 가져옴
const TodoList = ({todos, onRemove, onToggle}) => {
    return(
        <div className='TodoList'>
            {/* .map() : 배열에 가지고 있는 함수들을 차례대로 가져옴 */}
            {/* 반복문을 사용하지 않아도 차례대로 실행함 */}
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}></TodoListItem>
            ))}
        </div>
    );
}

export default TodoList;