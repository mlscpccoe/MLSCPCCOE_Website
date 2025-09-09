import Home from "../Home/Home"
import Events from "../Events/Events"
import Achievements from "../Achievements/Achievements"
import Team from "../Team/Team"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import TeamNew from "../TeamNew/team/team-section"
const MainContent = () => {
	return (
		<>
			<Navbar />
			<div>
				<Home />
				<Events />
				<Achievements />
				{/* <Team /> */}
				<TeamNew />

				<Footer />
			</div>
		</>
	)
}

export default MainContent
