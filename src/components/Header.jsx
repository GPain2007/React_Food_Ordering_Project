import logoImg from "../assets/logo.jpg";
import Buttons from "./UI/Buttons.jsx";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Buttons textOnly> Cart (0)</Buttons>
      </nav>
    </header>
  );
}
