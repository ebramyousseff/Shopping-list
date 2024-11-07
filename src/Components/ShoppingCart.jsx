import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "./formatCurrency";




const ShoppingCart = ({isOpen}) => {
    const {cartItems, closeCart} = useShoppingCart();
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                {cartItems.map((item)=>(
                    <CartItem key={item.id} {...item}/>
                ))}
                {formatCurrency(
                    cartItems.reduce((total,cartItem)=>{
                        const item = storeItems.find((i)=> i.id ===cartItem.id);
                        return total + (item?.price || 0) * cartItem;
                    },0)
                )}
                </Stack>
                
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart;