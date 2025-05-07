async function getStore(id) {
    const res = await fetch("http://localhost:4000/stores/" + id, {
        next: {
            revalidate: 60,
        },
    });
    return res.json();
}

export default async function StoreDetails({ params }) {
    const store = await getStore(params.id);

    return (
        <main>
            <nav>
                <h2>Store Details</h2>
            </nav>
            <div key={store.id} className="card">
                <h2>{store.name}</h2>
                <p>{store.about}</p>
                <div className="store-hours cardback">
                    <h3>Hours:</h3>
                    {store.hours.map((hour, key) => (
                        <p key={key}>
                            <span>{hour.split(":")[0]}</span>
                            <span>{hour.split(":")[1]}</span>
                        </p>
                    ))}
                </div>
                <p>Address: {store.address}</p>
                <p>Phone #: {store.phone}</p>
                <p>
                    Website:
                    <a href={store.website}></a>
                </p>
                <div className={`pill ${store.priority}`}>{store.priority} priority</div>
            </div>
        </main>
    );
}
