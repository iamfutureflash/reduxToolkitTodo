import { memo } from "react"
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className='bg-gray-500 w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
      <div className='text-gray-200'>
        Learn React with Redux Toolkit
      </div>
      <AddTodo />
      <Todo />
    </div>
  )
}

export default memo(App);