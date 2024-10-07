import Home from "../Home/Home"
import Events from "../Events/Events"
import Achievements from "../Achievements/Achievements"
import Team from "../Team/Team"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Projects from "../Projects/Projects"

const MainContent = () => {
	return (
		<>
			<Navbar />
			<div>
				<Home />
				<Events />
				<Achievements />
				<Team />
				<Projects />
				<Footer />
			</div>
		</>
	)
}

export default MainContent
