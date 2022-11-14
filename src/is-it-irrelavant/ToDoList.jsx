import { useReducer, useState } from "react"

// not a joke, maybe this is relevant!

export default function ToDoList() {

    const [state, dispatch] = useReducer(reducers, initialValue)

    const addToDoItem = (ToDoItem) => {
        console.log(ToDoItem)
        
        const list = state.todoList
        list.push(ToDoItem)
        dispatch({type: "add_to_list", payload: {todoList: list}})
    }

    console.log(state)

    return (
        <>
        {state.todoList && state.todoList.map(item => <div>{item}</div>)}
        <ToDoItem
            addToDoItem={addToDoItem}
        />
    </>)
}

const initialValue = {
    todoList: []
}

const reducers = (state, {type, payload}) => {

    switch(type){
        case "add_to_list": return {...state, payload}

    }
}

function ToDoItem({addToDoItem}){

    const [state, setState] = useState('')

    const handleChange = (e) => {
        setState(e.target.value)
    }

    const addToDoItemLocal = (e) => {
        e.preventDefault();
        addToDoItem(state);
        setState('');
    }

    return (
        <form>
            <input type="text" name="to-do-item" onChange={handleChange} value={state}/>
            <button onClick={addToDoItemLocal}> add </button>
        </form>
        )
}