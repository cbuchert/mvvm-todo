import { FormEvent, useState } from "react"
import { Todo } from "../../domain/model/types/Todo.ts"
import { addTodoUseCase } from "../../domain/model/useCases/addTodoUseCase.ts"
import { deleteTodoUseCase } from "../../domain/model/useCases/deleteTodoUseCase.ts"
import { getTodosUseCase } from "../../domain/model/useCases/getTodosUseCase.ts"
import { toggleTodoUseCase } from "../../domain/model/useCases/toggleTodoUseCase.ts"

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(getTodosUseCase())
  const [newTitle, setNewTitle] = useState<string>("")

  const toggleTodo = (id: string) => () => {
    setTodos(toggleTodoUseCase(id))
  }

  const deleteTodo = (id: string) => () => {
    setTodos(deleteTodoUseCase(id))
  }

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodos(addTodoUseCase(newTitle))
    setNewTitle("")
  }

  const updateNewTitle = (e: FormEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value)
  }

  return {
    todos,
    toggleTodo,
    deleteTodo,
    addTodo,
    newTitle,
    updateNewTitle,
  }
}
