import { FC } from "react"
import { useTodos } from "./TodoList.viewmodel.ts"

export const TodoList: FC = () => {
  const { todos, toggleTodo, deleteTodo, addTodo, newTitle, updateNewTitle} = useTodos()

  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type={"checkbox"} defaultChecked={todo.isComplete} onClick={toggleTodo(todo.id)}/>
            {todo.title}
            <button type={"button"} onClick={deleteTodo(todo.id)}>X</button>
          </li>
        ))}
        <li>
          <form onSubmit={addTodo}>
            <input value={newTitle} onChange={updateNewTitle}/>
          </form>
        </li>
      </ul>
    </div>
  )
}
