import "./App.css";
import BestSellers from "./component/BestSellers/BestSellers";
import FeaturedCategories from "./component/FeaturedCategories/FeaturedCategories";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <Shop />
    </div>
  );
}

export default App;
