const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수 -> 파라미터가 필요
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input           //전달 받은 파라미터는 액션 객체 안에 추가 필드로 합류
});

let id = 3;

export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});

export const toggle = id => ({
    type: TOGGLE,
    id
});

export const remove = id => ({
    type: REMOVE,
    id
});

//초기 상태
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};
//리듀서 함수
function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:        //추가
            return {
                ...state,                               //현재 상태(state) 불변성 유지
                todos: state.todos.concat(action.todo)  //현재 상태(state)에서 들어온 값을 추가
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...state, done: !todo.done } : todo       //배열 재생성
                )
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)    //삭제
            };
        default:
            return state;
    }
}

export default todos;




