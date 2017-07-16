import { createStore } from 'redux';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions/index.js';
import todoApp from './reducers';

// let store = createStore(function () { return 'Hello Redux' });
let store = createStore(todoApp);
var contents = document.getElementById('contents')
contents.innerHTML = store.getState().toString()

//TODO の 追加
var addTodoElem = document.getElementById('addTodo');
var input = addTodoElem.getElementsByTagName('input')[0];
var button = addTodoElem.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
    //ボタン を クリック し たら「 TODO を 追加 する」 という アクション を Store に 渡す
    var todoText = input.value;
    store.dispatch(addTodo(todoText));
});

//TODO の 完了
var todoList = document.getElementById('todoList');
var elements = todoList.getElementsByTagName('li');
var listArray = [...elements];
listArray.forEach((v, index) => {
    v.addEventListener('click', e => {
        //TODO を クリック し たら「 TODO の 完了 状態 を 切り替える」 という アクション を Store に 渡す
        store. dispatch( toggleTodo( index));
    });
});


//フィルタ リング
var links = document.getElementById('links');
var childs = links.childNodes;
var childList = [...childs];
childList.filter(v => v.nodeName != '#text').forEach( v => {
    v.addEventListener('click', e => {
        //リンク を クリック し たら「 TODO の フィルタ リング 状態 を 切り替える」
        //という アクション を Store に 渡す
        var filterText = v.innerHTML;
        store.dispatch(setVisibilityFilter(filterText));
    });
});

