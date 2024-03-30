import { Accordion1 } from "./components/Accordion1";
import { Article } from "./components/Article";
import { Aside } from "./components/Aside";
import { Chart } from "./components/Chart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Icons } from "./components/Icons";
import { Main } from "./components/Main";
import { Price } from "./components/Price";
import { Product } from "./components/Product";

function App() {
  document.title = "Homework";
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Chart />
        <Icons />
        <Product />
        <Article />
        <Aside />
        <Price />
        <Accordion1 />
        <Footer />
      </div>
    </>
  );
}

export default App;
