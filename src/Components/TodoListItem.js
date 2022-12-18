import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const { id, text, checked } = todo;

    return(
        <div className='TodoListItem'>
            <div className= {cn('checkbox', { checked })} onClick={()=> onToggle(id)}>
                {/* 체크되면 <MdCheckBox/>, 체크 안되면 <MdCheckBoxOutlineBlank/> */}
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
}

export default TodoListItem;