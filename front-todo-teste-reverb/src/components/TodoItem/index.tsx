"use client";
export interface TodoItemProps {
    id: number, 
    title: string,
    description: string, 
    complete: boolean
}
const TodoItem = ({ title, description}:TodoItemProps)=>{
    return (<li>
        <input type="checkbox" name="check" />
        <span>{title}</span> <br />
        <span>{description}</span>
        <button>Deletar</button>
    </li>)
}
export default TodoItem;