import { CartList } from "./components/CartList";
import { EmptyCart } from "./components/EmptyCart";

export const CartPage = () => {
    const cartListLength = 2;
    return (
        <main>
            {cartListLength ? <CartList /> : <EmptyCart />}
        </main>
    )
}
