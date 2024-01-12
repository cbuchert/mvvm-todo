import { v4 as uuidv4 } from "uuid"
import { Todo } from "./types/Todo.ts"

const todos: Todo[] = []

export const getTodos = () => {
  return todos
}

const createTodo = (title: string) => {
  const todo: Todo = {
    id: uuidv4(),
    title,
    date: new Date(),
    isComplete: false,
  }

  return todo
}

export const addTodo = (title: string) => {
  todos.push(createTodo(title))

  return todos
}

const toggleIsComplete = (todo: Todo) => {
  todo.isComplete = !todo.isComplete

  return todo
}

export const toggleTodo = (id: string) => {
  const todo = todos.find(todo => todo.id === id)

  if (!todo) {
    throw new Error('Todo not found')
  }

  toggleIsComplete(todo)

  return todos
}

export const deleteTodo = (id: string) => {
  const index = todos.findIndex(todo => todo.id === id)

  if (index === -1) {
    throw new Error('Todo not found')
  }

  todos.splice(index, 1)

  return todos
}

addTodo('Buy milk')
