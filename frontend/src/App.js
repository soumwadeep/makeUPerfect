import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
