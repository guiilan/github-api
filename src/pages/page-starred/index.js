import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './styles.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'


export default function StarredPage() {

	const location = useLocation()
	const user = location.state
	const [starred, setStarred] = useState([])

	useEffect(async () => {
		const response = await api.get(`${user.user}/starred`).then((res) => {
			setStarred(res.data)
		})
	}, [])

	return (
		<>
			<div>
			<Link to={{
                  pathname: "/"
                }}>Back to Home</Link>
				<table className="table">
					<thead>
						<tr className="table-tr">
							<th>
								<h3>Nome</h3>
							</th>
							<th>
								<h3>Forks</h3>
							</th>
							<th>
								<h3>Último Update</h3>
							</th>
							<th>
								<h3>Privacidade</h3>
							</th>
							<th>
								<h3>url</h3>
							</th>
						</tr>
					</thead>
					<tbody>
						{starred?.map((item, index) => (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.forks}</td>
								<td>{item.updated_at}</td>
								<td>{item.private ? "Privado" : "Público"}</td>
								<td>{item.url}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

