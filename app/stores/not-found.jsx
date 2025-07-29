import Link from "next/link";

export default function NotFound() {
	return (
		<main className="text-center">
			<h3 className="text-2xl font-bold pb-5">We Hit a Brick Wall.</h3>
			<p>We could not find the store you were looking for.</p>
			<p>
				Go back to your <Link href="/stores">stores</Link>.
			</p>
		</main>
	);
}
