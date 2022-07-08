import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Submenu from "./components/submenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
}

export default App;
