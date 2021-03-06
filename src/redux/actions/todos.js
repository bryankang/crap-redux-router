export const TODOS_ADD = 'TODOS_ADD';
export const TODOS_TOGGLE = 'TODOS_TOGGLE';
export const TODOS_FETCH_REQUEST = 'TODOS_FETCH_REQUEST';
export const TODOS_FETCH_SUCCESS = 'TODOS_FETCH_SUCCESS';
export const TODOS_FETCH_FAILURE = 'TODOS_FETCH_FAILURE';
export const TODOS_ADD_REQUEST = 'TODOS_ADD_REQUEST';
export const TODOS_ADD_SUCCESS = 'TODOS_ADD_SUCCESS';
export const TODOS_ADD_FAILURE = 'TODOS_ADD_FAILURE';
export const TODOS_TOGGLE_REQUEST = 'TODOS_TOGGLE_REQUEST';
export const TODOS_TOGGLE_SUCCESS = 'TODOS_TOGGLE_SUCCESS';
export const TODOS_TOGGLE_FAILURE = 'TODOS_TOGGLE_FAILURE';

export function todosFetchRequest() {
  return {
    type: TODOS_FETCH_REQUEST,
  };
}

export function todosFetchSuccess(todos) {
  return {
    type: TODOS_FETCH_SUCCESS,
    todos,
  };
}

export function todosFetchFailure(error) {
  return {
    type: TODOS_FETCH_FAILURE,
    error,
  };
}

export function todosAddRequest(text) {
  return {
    type: TODOS_ADD_REQUEST,
    text,
  };
}

export function todosAddSuccess(todo) {
  return {
    type: TODOS_ADD_SUCCESS,
    todo,
  };
}

export function todosAddFailure(error) {
  return {
    type: TODOS_ADD_FAILURE,
    error,
  };
}

export function todosToggleRequest(id, completed) {
  return {
    type: TODOS_TOGGLE_REQUEST,
    id,
    completed,
  };
}

export function todosToggleSuccess(todo) {
  return {
    type: TODOS_TOGGLE_SUCCESS,
    todo,
  };
}

export function todosToggleFailure(error) {
  return {
    type: TODOS_TOGGLE_FAILURE,
    error,
  };
}
