import { useState } from "react";
import { useGetTodosQuery, useGetTodoByIdQuery } from "./store/slices/apis"


export const TodoApp = () => {

  const [nextTodo, setNextTodo] = useState(1)
  //const { data: todos = [], isLoading } = useGetTodosQuery()
  //console.log(algo);
  const { data: todo, isLoading } = useGetTodoByIdQuery(nextTodo)
  console.log(todo);

  const nextId = () => {
    setNextTodo( nextTodo + 1 )
  }

  const previousId = () => {
    if ( nextTodo === 1 ) return;
    setNextTodo( nextTodo -1 )
  }

  return (
    <>
        <h1>ToDo's RTK Query</h1>
        <hr/>
        <h3> is Loading? { isLoading ? 'True' : 'False'} </h3>
        <pre> {JSON.stringify(todo)} </pre>
        <button
          onClick={ previousId }
        >
            Previous ToDo
        </button>
        <button
          onClick={ nextId }
        >
            Next ToDo
        </button>
        {/* <ul>
          { todos.map(todo => (
            <li key={todo.id}>
              <strong> {todo.completed ? 'Completed' : 'Unfinished'} </strong>
              {todo.title} 
            </li>
          )) }
        </ul> */}
    </>
  )
}
