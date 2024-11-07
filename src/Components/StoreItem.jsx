import { Button, Card } from "react-bootstrap";
import formatCurrency from "./formatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const StoreItem = ({ id, price, name, imgUrl }) => {
  const {
    getItemsQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{ height: "200px", object: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseQuantity(id)}>
              Add to Card
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gab: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gab: "0.5rem" }}
              >
                <Button onClick={() => decreaseQuantity(id)}>-</Button>
                <span className="fs-3">{quantity} in cart</span>
                <Button onClick={() => increaseQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
