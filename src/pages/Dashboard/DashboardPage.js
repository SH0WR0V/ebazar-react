import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";

export const DashboardPage = () => {
    const [orders, setOrders] = useState([]);
    const token = JSON.parse(sessionStorage.getItem("token"));
    const skid = JSON.parse(sessionStorage.getItem('skid'));
    useEffect(() => {
        async function fetchOrders() {
            const response = await fetch(`http://localhost:8000/600/orders?user.id=1`, {
                method: "GET",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            setOrders(data);
        }
        fetchOrders();
    }, [])
    return (
        <main>
            <section>
                {orders.length && orders.map((order) => (
                    <DashboardCard key={order.id} order={order} />
                ))}
            </section>
            <section>
                {!orders.length && <DashboardEmpty />}
            </section>
        </main>
    )
}
