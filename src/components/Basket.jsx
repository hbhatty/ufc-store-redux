import { useSelector } from "react-redux";
import Product from "./Product";

const Basket = () => {
  const { products, total, amount } = useSelector((store) => store.basket);
  return (
    <div className="py-4">
      {amount >= 1 ? (<>
        <div>
        {products.map((item, i) => (
          <Product
            name={item.name}
            price={item.price}
            image={item.image}
            amount={item.amount}
          />
        ))}
      </div>
      </>) : (
        <>
        <p className="text-2xl text-gray-700 font-medium text-center">Your basket is empty!</p>
        </>
      )}
       <div className="flex flex-row items-center justify-evenly py-8">
        <p className="text-2xl font-medium">Total</p>
        <p className="text-2xl font-medium">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Basket;
