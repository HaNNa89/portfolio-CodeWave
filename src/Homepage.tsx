import { Helmet } from "react-helmet";
import Clients from "./Clients";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ProfileCard from "./components/ProfileCard";
function Homepage() {
  return (
    <>
      <Helmet>
        <title>Home - Codewave</title>
      </Helmet>
      <Header />
      <Hero />
      <ProfileCard />
      <Clients />
      <Footer />
    </>
  );
}
export default Homepage;
