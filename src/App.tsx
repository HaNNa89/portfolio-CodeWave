import { Box } from "@mui/system";
import "./App.css";
import Clients from "./Clients";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <>
      <Box style={backgroundColor}>
        <Header />
        <Hero />
      </Box>
      <Clients />
      <Footer />
    </>
  );
}

const backgroundColor = {
  backgroundColor: "#83BDC0",
};

export default App;
