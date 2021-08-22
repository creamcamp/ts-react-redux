import axios from 'axios';
import { Dispatch } from 'redux'
import { TodoAction, TodoActionTypes } from '../../types/todo';

// https://jsonplaceholder.typicode.com/todos
export const fetchTodos = (page = 0, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODOS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                }
            });
            setTimeout(() => {
                dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
            }, 500);
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Unexpected error during the todo list fetch!'
            })
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}
