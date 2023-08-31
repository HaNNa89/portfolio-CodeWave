import { Box } from "@mui/system";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ProfileCard from "./components/ProfileCard";

function App() {
	return (
		<>
			<Box style={backgroundColor}>
				<Header />
				<Hero />
			</Box>
			<ProfileCard />
			<Footer />
		</>
	);
}

const backgroundColor = {
	backgroundColor: "#83BDC0",
};

export default App;
