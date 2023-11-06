import { MdShoppingCartCheckout } from "react-icons/md";

export const CartWidget = () => {
    return (
        <div className="d-flex">
            <MdShoppingCartCheckout color="red" size={40} />
            <p className="mx-4">(1)</p>
        </div>
    )
}