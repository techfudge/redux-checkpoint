import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
} from "../types/types";

const initialState = {
  todos: [
    {
      id: Math.random(),
      task: "Learn React JS",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Learn Javascript",
      isDone: true,
    },
    {
      id: Math.random(),
      task: "Learn HTML",
      isDone: true,
    },
  ],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, todos: [...state.todos, payload] };

    case DELETE_TASK:
      return { ...state, todos: state.todos.filter((el) => el.id !== payload) };

    case COMPLETE_TASK:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === payload.idTask ? { ...el, task: payload.value } : el
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
