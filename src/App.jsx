import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <Slider />
      <ProductionHouse />
    </div>
  );
};

export default App;
