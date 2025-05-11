import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">
            <h3 className="text-2xl font-bold pb-5">There was a problem.</h3>
            <p>We could not find the page you were looking for.</p>
            <p>
                Go back to the <Link href="/">Homepage</Link>
            </p>
        </main>
    );
}
