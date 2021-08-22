import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypedSelector';

export const TodoList: FC = () => {
    const { page, error, loading, todos, limit } = useTypeSelector(state => state.todo);
    const { fetchTodos, setTodoPage } = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if (loading) {
        return <h1>Todo list loading is in progress...</h1>
    }

    if (error) {
        return <h1>{ error }</h1>
    }

    return (
        <div className="TodoList">
            { todos.map(todo => <div key={todo.id}> { todo.id } - { todo.title }</div>) }
            <div
                className="Pages"
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                { pages.map(p =>
                    <div
                        key={p}
                        style={{ border: p === page ? '2px solid green' : '1px solid grey', padding: 10 }}
                        className="Page"
                        onClick={() => setTodoPage(p)}
                    >
                        { p }
                    </div>
                    ) }
            </div>
        </div>
    )
}

