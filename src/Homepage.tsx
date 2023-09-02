import Clients from "./Clients";
import Header from "./Header";
import Hero from "./Hero";
import ProfileCard from "./components/ProfileCard";

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
