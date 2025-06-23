import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from "./components/UI/Cart.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <UserProgressContextProvider>
          <Header />
          <Meals />
          <Cart />
        </UserProgressContextProvider>
      </CartProvider>
    </>
  );
}

export default App;
