import React from "react";

const List = ({ data,upDateList }) => {
    const deleteList = async (id) => {
        try{
            const resp = await fetch ( 'https://playground.4geeks.com/todo/todos/'+id,{
                method: 'DELETE',
            });
            if(resp.status === 204) upDateList();
        }catch(err){
            alert(err)
        }
    }
    
    return (
        <ul className="list-group notebook w-100">
            {data.length === 0 ? (
                <li className="list-group-item">No hay tareas, añadir tareas</li>
            ) : (
                data.todos?.map((task) => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between task-item ">
                        {task.label}
                        <button className="btn btn-secondary" onClick={()=>deleteList(task.id)}> <i className="fa-solid fa-trash"></i></button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default List;