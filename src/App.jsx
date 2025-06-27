import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from "./components/UI/Cart.jsx";
import Checkout from "./components/UI/Checkout.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <UserProgressContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </UserProgressContextProvider>
      </CartProvider>
    </>
  );
}

export default App;
