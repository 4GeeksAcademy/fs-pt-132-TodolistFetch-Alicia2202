import React, { useEffect, useState } from "react";


const Home = () => {

	const [users, setUsers] = useState([])

	useEffect(() => {getUsers()}, [])
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

	return (
		<div className="text-center">



		</div>
	);
};

export default Home;