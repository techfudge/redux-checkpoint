import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../redux/action/action";
import EditTask from "./EditTask";

const TaskItem = ({ todo }) => {

    const dispatch = useDispatch();
    return (
        <div className="task">
            <h1 className={todo.isDone ? "Done" : "none"}>{todo.task}</h1>
            <button onClick={() => dispatch(completeTodo(todo.id))}>{todo.isDone ? "Undo" : "Complete"}</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            <EditTask todo={todo} />
        </div>
    )
}

export default TaskItem;