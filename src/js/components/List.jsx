import React from "react";

const List = ({ data, upDateList, checkOk }) => {
    const deleteList = async (id) => {
        try {
                        const resp = await fetch('https://playground.4geeks.com/todo/todos/' + id, {
                method: 'DELETE',
            });
            if (resp.status === 204) upDateList();
        } catch (err) {
            alert(err)
        }
    }
    //PUT
    const handleDone = async (task) => {
        try {
            const updatedTaskCheck = {
                label: task.label,
                is_done: !task.is_done
            };
            const resp = await fetch('https://playground.4geeks.com/todo/todos/' + task.id, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify( updatedTaskCheck)
            });
             if (resp.ok===true) upDateList();

        } catch (err) {
            alert(err)
        }
    };

    return (
        <ul className="list-group notebook w-100">
            {data.length === 0 ? (
                <li className="list-group-item">No hay tareas, añadir tareas</li>
            ) : (
                data.todos?.map((task) => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between task-item w-100">
                        {task.label}
                        <button type="button" className="btn" onClick={() => deleteList(task.id)}> <i className="fa-regular fa-trash-can text-secondary"></i></button>
                        <button type="button" className="btn" onClick={() => handleDone(task)}><i className={`fa-regular ${task.is_done ? "fa-circle-check text-success" : "fa-circle"}`}></i></button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default List;