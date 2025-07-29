import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h2>Welcome!</h2>
			<p>
				Please click below to view stores you have saved, as well as add new stores! Check below for updates -
				we are working on improving the app!
			</p>

			<div className="flex justify-center my-8">
				<Link
					href="/stores"
					tabIndex="-1"
				>
					<button className="btn-primary">My Stores</button>
				</Link>
			</div>
			<h2>Favorite Stores</h2>
			<div className="cardback">
				<div className="flex justify-center my-8">
					<Link
						href="/stores/add"
						tabIndex="-1"
					>
						<button className="btn-secondary">
							<svg
								fill="none"
								strokeWidth={1.5}
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								height={20}
								width={20}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
							<span>Add Store</span>
						</button>
					</Link>
				</div>
			</div>

			<h2>Updates</h2>
			<div className="cardback">
				<div className="card no-header">
					<h3>New feature...</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque debitis dolorem. Sit
						quasi voluptates itaque veritatis eligendi necessitatibus nulla quibusdam id porro voluptas
						facilis nesciunt, fuga dolorem dolore ut.
					</p>
				</div>
				<div className="card no-header">
					<h3>New website live!</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, et pariatur. Officia, dolore a
						architecto repudiandae quaerat odit nemo eius id vero, molestiae earum saepe atque quas hic
						praesentium explicabo?
					</p>
				</div>
			</div>
			<div className="card no-header">
				<h3>I'm a lonely card for testing</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque debitis dolorem. Sit quasi
					voluptates itaque veritatis eligendi necessitatibus nulla quibusdam id porro voluptas facilis
					nesciunt, fuga dolorem dolore ut.
				</p>
			</div>
		</main>
	);
}
