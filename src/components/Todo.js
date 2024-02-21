import styles from "../styles.module.css";
export default function Todo({todoItem,todoList, setTodoList}){
    
    const deleteItem=()=>{
        setTodoList(todoList.filter((item)=>item.id!==todoItem.id));
    }
    return(
        <div>
            <div className={styles.todoItem}>
            <h3 className= {styles.todoName}>{todoItem.name}</h3>
            <button onClick={deleteItem} className={styles.deleteButton}> Done</button>
            </div>
        </div>
    )
};