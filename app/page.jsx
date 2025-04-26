import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h2>Dashboard</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla saepe tenetur excepturi alias, deleniti
				facere necessitatibus veritatis officia, iusto minima, optio autem cumque eum nostrum consequatur enim
				quisquam voluptatibus? Modi.
			</p>

			<div className="flex justify-center my-8">
				<Link href="/tickets">
					<button className="btn-primary">View Tickets</button>
				</Link>
			</div>

			<h2>Company Updates</h2>

			<div className="card">
				<h3>New member of the web dev team...</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque debitis dolorem. Sit quasi
					voluptates itaque veritatis eligendi necessitatibus nulla quibusdam id porro voluptas facilis
					nesciunt, fuga dolorem dolore ut.
				</p>
			</div>
			<div className="card">
				<h3>New website live!</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, et pariatur. Officia, dolore a
					architecto repudiandae quaerat odit nemo eius id vero, molestiae earum saepe atque quas hic
					praesentium explicabo?
				</p>
			</div>
		</main>
	);
}
