import StoreList from "./StoreList";
import Loading from "../loading";
import { Suspense } from "react";

export default function MyStores() {
    return (
        <main>
            <nav>
                <div>
                    <h2>My Stores</h2>
                    <p>
                        <small>Stores that I have saved.</small>
                    </p>
                </div>
            </nav>

            <Suspense fallback={<Loading />}>
                <StoreList />
            </Suspense>
        </main>
    );
}
