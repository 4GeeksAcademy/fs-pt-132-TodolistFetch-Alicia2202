import React, { useEffect, useState } from "react";


const Home = () => {

	const [users, setUsers] = useState([])
	const [newUser, setNewUser] = useState('')

	useEffect(() => { getUsers() }, [])
	// Pedido Get
	const getUsers = () => {
		fetch('https://playground.4geeks.com/todo/users')
			.then(resp => {
				if (!resp.ok) throw new Error('error en el pedido')
				return resp.json()
			})
			.then(data => setUsers(data.users))
			.catch(err => console.log(err))
	}

	console.log(users)

	//Pedido Post para crear usuario

	const handleChange = e => {
		setNewUser(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		fetch('https://playground.4geeks.com/todo/users/' + newUser, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: {}
		})
			.then(resp => {
				if (!resp.ok) throw new Error('error en el pedido')
				return resp.json()
			})
			.then(data => {
				console.log(data)
				getUsers()
			})
			.catch(err => console.log(err))
	}
	return (
		<div className="text-center">

			<form onSubmit={handleSubmit}>
				<input type="text" value={newUser} onChange={handleChange} />
				<input type="submit" />
			</form>



		</div>
	);
};

export default Home;