import { getTodos } from "../todos.ts"

export const getTodosUseCase = () => {
  return [...getTodos()]
}
