// components/Todo.js
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../actions/slice';

function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]); 
    const dispatch = useDispatch();

    useEffect(() => {
        
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        if (storedTasks.length > 0) {
            setList(storedTasks); 
        }
    }, []);

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            const newTask = {
                id: new Date().getTime().toString(),
                data: inputValue
            };
           
            dispatch(addTodo(newTask));
         
            setList([...list, newTask]);
        
            saveTasksToLocalStorage([...list, newTask]);
            setInputValue(""); 
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
        const updatedList = list.filter(task => task.id !== id);
        setList(updatedList);
        saveTasksToLocalStorage(updatedList);
    };

    const saveTasksToLocalStorage = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    return (
        <>
            <div>
                <div className='d-flex align-items-center justify-content-center text-black'>
                    <h1><i className="fa-solid fa-rectangle-list me-3 mt-2" style={{ color: "#207ad9" }}></i>Todo-List</h1>
                </div>
                <div className='d-flex align-items-center justify-content-center text-black mt-5'>
                    <input
                        className='form-control w-25 rounded border border-dark shadow'
                        type="text"
                        placeholder='add your list'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button
                        onClick={handleAddTodo}
                        style={{ backgroundColor: "#207ad9" }}
                        className='rounded border border-info ms-2'>
                        <i className="fa-solid fa-plus fa-lg text-white "></i>
                    </Button>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center text-black mt-1'>
                {list.map((elem) => (
                    <div key={elem.id} className="d-flex align-items-center border rounded p-1 w-25 me-5 mt-2">
                        <h4 className="flex-grow-1 ">{elem.data}</h4>
                        <i
                            onClick={() => handleDeleteTodo(elem.id)}
                            className="fa-solid fa-trash fa-lg ms-3"
                            style={{ color: "#e2182c", cursor: "pointer" }}
                        ></i>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Todo;
