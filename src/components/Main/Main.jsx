import Home from "../Home/Home"
import Events from "../Events/Events"
import Achievements from "../Achievements/Achievements"
import Team from "../Team/Team"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const MainContent = () => {
	return (
		<>
			<Navbar />
			<div>
				<Home />
				<Events />
				<Achievements />
				<Team />
				<Footer />
			</div>
		</>
	)
}

export default MainContent
