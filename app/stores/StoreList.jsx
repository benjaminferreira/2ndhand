import Link from "next/link";

async function getMyStores() {
	const res = await fetch("http://localhost:4000/stores", {
		next: {
			revalidate: 0, // Opt out of using cache
		},
	});
	return res.json();
}

export default async function StoreList() {
	const stores = await getMyStores();

	return (
		<>
			{stores.map((store) => (
				<div
					key={store.id}
					className="card"
				>
					<div className="card-header">
						<h2>{store.name}</h2>
						<Link href={`/stores/${store.id}`}>
							<svg
								fill="none"
								strokeWidth={2}
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								height={28}
								width={28}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</Link>
					</div>
					<div className="card-body">
						<p>{store.about}</p>
					</div>
				</div>
			))}
			{stores.length === 0 && <p className="text-center">You have no stores.</p>}
		</>
	);
}
