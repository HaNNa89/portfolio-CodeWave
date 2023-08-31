import { Box } from "@mui/system";
import "./App.css";
import Clients from "./Clients";
import ProfileCard from "./components/ProfileCard";
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
      <ProfileCard />
      <Clients />
      <Footer />
    </>
  );
}

const backgroundColor = {
  backgroundColor: "#83BDC0",
};

export default App;
