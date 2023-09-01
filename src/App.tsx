import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import "./App.css";
import Clients from "./Clients";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Header />       
      <main> <Outlet /> </main>
      <Footer />
    </>
  );
}


export default App;
