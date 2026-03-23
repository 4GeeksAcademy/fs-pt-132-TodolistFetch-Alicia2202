import React, { useEffect, useState } from "react";


const Home = () => {

	const [myUser, setMyUser] = useState('Alicia');
	const [data, setData] = useState([]);//-->Lista de todos
	const [newTask, setNewTask] = useState('')
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


	const handleChange = e => {
		setNewTask(e.target.value)
	}


	const handleSubmit = async ({label,done}) => {
		e.preventDefault()
		if(newTask)
		try {
			const resp = await fetch(url + '/todos/' + myUser, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					label,
					done: "is_done"
				})
			});
			if (!resp.ok) throw new Error('Error en el pedido')
			return resp.json();
			await getMyUser()
			setNewTask("")
		} catch (err) {
			console.log(err);
		}
	}
	
	return (
		<div className="text-center">

			<form onSubmit={handleSubmit}>
				<input type="text" value={newTask} onChange={handleChange} />
				<input type="submit" />
			</form>



		</div>
	);
}

export default Home;