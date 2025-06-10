"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
	const router = useRouter();

	const [name, setName] = useState("");
	const [about, setAbout] = useState("");
	const [priority, setPriority] = useState("low");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const store = {
			name,
			about,
			priority,
			address: "12345 Lane, USA",
			phone: "1234567890",
			hours: [
				"Sunday: 10AM - 7PM",
				"Monday: 9AM - 8PM",
				"Tuesday: 9AM - 8PM",
				"Wednesday: 9AM - 8PM",
				"Thursday: 9AM - 8PM",
				"Friday: 9AM - 8PM",
				"Saturday: 9AM - 8PM",
			],
			website: "https://www.example.com",
		};

		const res = await fetch("http://localhost:4000/stores", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(store),
		});

		if (res.status === 201) {
			router.push("/stores");
			router.refresh();
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="card"
		>
			<label>
				<span>Store Name:</span>
				<input
					required
					type="text"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			</label>
			<label>
				<span>About:</span>
				<textarea
					required
					onChange={(e) => setAbout(e.target.value)}
					value={about}
				/>
			</label>
			<label>
				<span>Priority:</span>
				<select
					onChange={(e) => setPriority(e.target.value)}
					value={priority}
				>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
			</label>
			<button
				className="btn-secondary"
				disabled={isLoading}
			>
				{isLoading && <span>Adding...</span>}
				{!isLoading && <span>Add Store</span>}
			</button>
		</form>
	);
}
