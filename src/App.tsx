import { Box } from "@mui/system";
import "./App.css";
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
      <Footer />
    </>
  );
}

const backgroundColor = {
  backgroundColor: "#83BDC0",
};

export default App;
