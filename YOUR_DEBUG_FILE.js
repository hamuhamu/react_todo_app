import todoApp from './reducers/index.js';

// 初期 値 と なる State を 取得
var initialState = todoApp({}, {});

console.log(initialState);
// => { todos:[], visibilityFilter:" SHOW_ ALL" }

// TODO を一つ追加する
var nextState = todoApp(initialState, {type:' ADD_TODO', id: 1, text:' First todo'});

console.log(nextState);
// => { todos:[{ id: 1, text:" First todo!", completed: false }], visibilityFilter:" SHOW_ ALL" }
