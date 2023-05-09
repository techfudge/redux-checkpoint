import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK } from "../types/types"

export const addTodo = (newTask) => ({
    type: ADD_TASK,
    payload: newTask
})

export const deleteTodo = (idTask) => ({
    type: DELETE_TASK,
    payload: idTask
})

export const completeTodo = (idTask) => ({
    type: COMPLETE_TASK,
    payload: idTask
})

export const editTask = (idTask, value) => ({
    type: EDIT_TASK,
    payload: { idTask, value }
})
