import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/action";


const AddTask = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch()
    const add = () => {
        dispatch(addTodo({ id: Math.random(), task: text, isDone: false }))
        setText("");
    }
    return (
        <div className="add">
            <input type="text" className="form-control" onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={add}>add</button>
        </div>
    )
}

export default AddTask;