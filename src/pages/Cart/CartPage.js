import { CartList } from "./components/CartList";
import { EmptyCart } from "./components/EmptyCart";
import { useCart } from "../../context";

export const CartPage = () => {
    const { cartList } = useCart();
    return (
        <main>
            {cartList.length ? <CartList /> : <EmptyCart />}
        </main>
    )
}
