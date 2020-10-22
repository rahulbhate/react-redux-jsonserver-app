import * as types from "./actionTypes";

export function createTodo(text) {
    return {
        type: types.CREATE_TODO, 
        text
    }
}
export function removeTodo(text) {
    return {
        type: types.REMOVE_TODO,
        text
    }
}

export function markTodo(text) {
    return {
        type: types.COMPLETED_MARK_TODO,
        text
    }
}