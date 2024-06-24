import { CartList } from "./components/CartList";
import { EmptyCart } from "./components/EmptyCart";
import { useTitle } from "../../hooks/useTitle";
import { useCart } from "../../context";

export const CartPage = () => {
    const { cartList } = useCart();
    useTitle(`Cart (${cartList.length})`);
    return (
        <main>
            {cartList.length ? <CartList /> : <EmptyCart />}
        </main>
    )
}
