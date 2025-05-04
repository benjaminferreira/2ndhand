import StoreList from "./StoreList";

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
            <StoreList />
        </main>
    );
}
