import { toggleTodo } from "../todos.ts"

export const toggleTodoUseCase = (id: string) => {
  return toggleTodo(id)
}
