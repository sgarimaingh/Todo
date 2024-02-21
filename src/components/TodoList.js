import Todo from "./Todo";

export default function TodoList({todoList, setTodoList}){
    return(
        <div>
            {todoList.map((item)=>(
                <Todo todoList={todoList} setTodoList={setTodoList} key = {item.id} todoItem={item}></Todo>
            ))}
        </div>
    )
}