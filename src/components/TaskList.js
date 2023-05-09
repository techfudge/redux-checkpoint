import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {

    const taskList = useSelector(state => state.taskReducer.todos);
    return (
        <div>
            {
                taskList.map((todo, index) => <TaskItem  key={index} todo={todo} />)
            }
        </div>
    )
}

export default TaskList;