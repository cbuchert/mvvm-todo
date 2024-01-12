import { addTodo } from "../todos.ts"

export const addTodoUseCase = (title: string) => {
  return addTodo(title);
}
