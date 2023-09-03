import Clients from "./Clients";
import ProfileCard from "./components/ProfileCard";
import Header from "./Header";
import Hero from "./Hero";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <ProfileCard />
      <Clients />
    </>
  );
}
export default Homepage;
