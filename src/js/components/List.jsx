import React from "react";

const List = ({ data }) => {
    return (
        <ul className="list-group notebook">
            {data.length === 0 ? (
                <li className="list-group-item">No hay tareas, añadir tareas</li>
            ) : (
                data.map((task) => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between task-item">
                        {task.label}
                        
                    </li>
                ))
            )}
        </ul>
    );
};

export default List;