import React, { useEffect, useState } from "react";
import Form from "./Form";  
import List from "./List";


const Home = () => {

	const [myUser, setMyUser] = useState('Alicia');
	const [data, setData] = useState([]);//-->Lista de todos
	// const [newTask, setNewTask] = useState('')
	const [error, setError] = useState('')
	const url = 'https://playground.4geeks.com/todo'

	useEffect(() => { getMyUser() }, [])
	// Pedido GET
	const getMyUser = async () => {
		try {
			const resp = await fetch(url + '/users/' + myUser)
			if (resp.status === 404) {
				throw new Error('404-usuario no encontrado')
			}
			const data = await resp.json()
			setData(data)
		} catch (err) {
			createMyUser()
		}

	}
	//Pedido POST
	const createMyUser = async () => {
		try {
			const resp = await fetch(url + '/users/' + myUser, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
			});
			if (!resp.ok) throw new Error('No se pudo crear el usuario')
			await getMyUser();
		} catch (err) {
			console.log(err);
		}
	}


	// const handleChange = e => {
	// 	setNewTask(e.target.value)
	// }


	const addTask = async (taskLabel) => {
	
		try {
			if (taskLabel.trim() === "") {
				return setError('Tiene que haber una tarea en la lista')
			}
			const formatedData = {
				label: taskLabel.trim(),
				is_done: false
			}
			const resp = await fetch(url + '/todos/' + myUser, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formatedData)
			});
			if (!resp.ok) throw new Error('Error en el pedido')
			// setNewTask("")
			await getMyUser()
		} catch (err) {
			console.log(err);
		}
	}

	return (
		// <div className="text-center">

		// 	<form onSubmit={handleSubmit}>
		// 		<input type="text" value={newTask} onChange={handleChange} />
		// 		<input type="submit" />
		// 	</form>



		// </div>
		<div className="container d-flex justify-content-center">
			<main className="d-flex flex-column align-items-center w-25">
			<h1 className="mt-4">Lista de tareas</h1>
            <Form addTask={addTask} />
			<List data={data} upDateList={getMyUser} />

			</main>
			
			
		</div>
	);
}

export default Home;