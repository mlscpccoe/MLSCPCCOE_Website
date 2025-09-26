import Home from "../Home/Home"
import {Routes, Route} from "react-router-dom"
import Events from "../Events/Events"
import Achievements from "../Achievements/Achievements"
import Team from "../Team/Team"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import TeamPage from "../TeamSection/TeamPage"
import TeamMainPage from "../TeamSection/TeamMainPage"
const MainContent = () => {
	return (
		<>
		<Routes>
			<Route path="/" element={
				<>
					<Navbar />
					<div>
						<Home />
						<Events />
						<Achievements />
						<TeamMainPage />
						<Footer />
					</div>
				</>
			}></Route>
			<Route path="/team/:year" element={<TeamPage />}></Route>
		</Routes>
			
		</>
	)
}

export default MainContent
