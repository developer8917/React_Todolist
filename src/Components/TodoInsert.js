import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
import { useState, useCallback } from 'react';

const TodoInsert = ({onInsert}) => {

    const [ value, setValue ] = useState('');
    
    // 한번 만들어진 함수를 재사용
    const onChange = useCallback(e =>{
        // e.target.value = input에 입력한 값
        setValue(e.target.value);
        // 전달인자 []는 빈값으로 냅둠
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            // 새로고침 안하게 해주는 기능
            // 새로고침 안하고 데이터만 넣기 위해 사용
            e.preventDefault();
        }, 
        // 전달인자로 onInsert, value 사용
        [onInsert, value]
    )

    return(
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input
                placeholder='할 일을 입력하셈'
                value = {value}
                onChange = {onChange}
            ></input>
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
}

export default TodoInsert;