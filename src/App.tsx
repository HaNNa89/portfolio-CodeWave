import { Box } from "@mui/system";
import "./App.css";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <>
      <ContactForm />
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
