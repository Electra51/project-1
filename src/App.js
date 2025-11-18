// import "./App.css";
// import BestSellers from "./component/BestSellers/BestSellers";
// import FeaturedCategories from "./component/FeaturedCategories/FeaturedCategories";
// import Header from "./component/Header/Header";
// import Hero from "./component/Hero/Hero";
// import SaleBanner from "./component/SaleBanner/SaleBanner";
// import Shop from "./component/Shop/Shop";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <FeaturedCategories />
//       <BestSellers />
//       <SaleBanner />
//       <Shop />
//     </div>
//   );
// }

// export default App;

import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
