import { TodoListItem } from "./TodoListtem"

/* eslint-disable react/prop-types */
export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todo"}
            {todos.map(todo => {
            // console.log(todo.title);
                return (
                    // eslint-disable-next-line react/jsx-key
                    <TodoListItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                )
            })}
        </ul>
        )
}