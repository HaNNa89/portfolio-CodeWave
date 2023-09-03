import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
