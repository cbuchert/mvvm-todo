import { deleteTodo } from "../todos.ts"

export const deleteTodoUseCase = (id: string) => {
    return deleteTodo(id);
}
