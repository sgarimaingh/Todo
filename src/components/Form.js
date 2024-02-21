import styles from "../styles.module.css"
import shortid from 'shortid'

function Form({todo,setTodo,todoList,setTodoList}){

    const handleChange=(event)=>{
        setTodo(event.target.value);
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        setTodoList([...todoList, {name:todo, id: shortid.generate()}]);
        console.log(todoList);
        setTodo('');
    };
    return(
        <div className={styles.todoForm}>
            <form onSubmit={handleSubmit}>
                <input 
                    value={todo} 
                    onChange={handleChange}
                    className={styles.todoInput}
                    placeholder="Type item....">
                </input>
                <button type="submit" className={styles.todoButton}>Add</button>
            </form>

        </div>
    )
}

export default Form;