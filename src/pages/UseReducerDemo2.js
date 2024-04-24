import { useReducer } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

// useRef to re-focus the input field after adding a task?

// 1. Initial state
const initialTasks = [
  { id: 0, text: "Watch The boys", done: true },
  { id: 1, text: "Learn React", done: false },
  { id: 2, text: "T1 lose", done: true },
];
let nextId = 3;
// 2. Actions
const ACTIONS = {
  ADD: "added",
  CHANGE: "changed",
  DELETE: "deleted",
};
const addTask = (payload) => ({
  type: ACTIONS.ADD,
  payload,
});
const changeTask = (payload) => ({
  type: ACTIONS.CHANGE,
  payload,
});
const deleteTask = (payload) => ({
  type: ACTIONS.DELETE,
  payload,
});
// 3. Reducer
function tasksReducer(state, action) {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return state.map((t) => {
        if (t.id === action.payload.task.id) {
          return action.payload.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return state.filter((t) => t.id !== action.payload.id);
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}
// 4. Dispatch

const UseReducerDemo2 = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch(addTask({ id: nextId++, text }));
  }

  function handleChangeTask(task) {
    dispatch(changeTask({ task }));
  }

  function handleDeleteTask(taskId) {
    dispatch(deleteTask({ id: taskId }));
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};
export default UseReducerDemo2;
