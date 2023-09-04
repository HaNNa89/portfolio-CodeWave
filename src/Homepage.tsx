import Clients from "./Clients";
import ProfileCard from "./components/ProfileCard";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <ProfileCard />
      <Clients />
      <Footer />
    </>
  );
}
export default Homepage;
