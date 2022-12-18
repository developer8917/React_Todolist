import './App.css';
import TodoInsert from './Components/TodoInsert';
import TodoTemplate from './Components/TodoTemplate';
import TodoList from './Components/TodoList';
import React, {useState, useRef, useCallback} from 'react';
// useRef = useReference
function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트 공부하기',
      checked : true,
    },
    {
      id : 2,
      text : 'HTML 공부하기',
      checked : false,
    },
    {
      id : 3,
      text : 'Nodejs 공부하기',
      checked : false,
    },
  ]);

  const nextId = useRef (4);

  // + 버튼 눌렀을 때 작동하는 함수
  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      };
      // concat = add 같은 기능을 가진 함수
      // todos에 todo를 추가(concat) 해라
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    // useCallback에 반환 인자 todos를 넘겨줌
    [todos],
  );

  // remove 버튼이 여기 없음 -> TodoList로 넘겨서 TodoList에서 처리
  // - 버튼 눌렀을떄 작동하는 함수
  const onRemove = useCallback(
    id => {
        // id가 같지 않은 친구들만 골라내서(todos.filter)
        // todos에 setTodos해줌 (id가 같은놈만 걸러짐)
        setTodos(todos.filter(todo => todo.id !== id));
    },// todos를 넘겨받음
    [todos]
  )

    // 체크박스 체크 되고, 안되고 토글 처리해주는 함수
    const onToggle = useCallback(
      id => {
        // todos에서 todo를 하나씩 읽어옴
        // checked:!todo.checked -> 체크 o -> x, 체크 x -> o
        // ... -> 스프레드 연산자
        setTodos(todos.map(todo => todo.id == id ? {...todo, checked:!todo.checked} : todo));
      },
      [todos]
    )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      {/* todos, onRemove, onToggle을 TodoList로 전달 */}
      <TodoList  todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
                {/* 위에 있는 useState에 있는 todos임 */}
    </TodoTemplate>
  );
}

export default App;