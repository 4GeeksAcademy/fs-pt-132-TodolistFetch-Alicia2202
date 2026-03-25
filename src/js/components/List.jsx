import React from "react";

const List = ({ data,upDateList,checkOk }) => {
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
    //PUT
    const handleDone = async (id) => {
        try{
            const resp = await fetch ('https://playground.4geeks.com/todo/todos/'+id,{
               method:'PUT',
            });

        }catch (err){

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
                        <button type="button" className="btn" onClick={()=>deleteList(task.id)}> <i className="fa-regular fa-trash-can text-secondary"></i></button>
                        <button type="button" className="btn" ><i className="fa-regular fa-circle-check text-success"></i></button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default List;