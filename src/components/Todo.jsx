import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"
const Todo = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return (
        <>
            <div className="">
                <div>Todo</div>
                <div className="">
                    {todos.map((todo) => {
                        return (
                            <>
                                <div key={todo.id} className="gap-4 flex flex-row justify-between items-center bg-gray-300 rounded-md p-2 my-2">
                                    <li>{todo.text}</li>
                                    <button
                                        onClick={() => { dispatch(removeTodo(todo.id)) }}
                                        className="bg-red-400 px-2 py-1 rounded-md"
                                    >
                                        X
                                    </button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Todo