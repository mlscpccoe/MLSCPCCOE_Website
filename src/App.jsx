import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import LogoAnimation from "./components/LogoAnimation/LogoAnimation"
import Tagline from "./components/Tagline/Tagline"
import Home from "./components/Home/Home"
import Events from "./components/Events/Events"


function App() {
	const [animationDone, setAnimationDone] = useState(false)
	const [displayTagline, setDisplayTagline] = useState(false)
	const [taglineDone, setTaglineDone] = useState(false)
	const [displayHome, setDisplayHome] = useState(false)
	const [displayEvent, setDisplayEvent] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimationDone(true)
		}, 2000) // 2 seconds delay

		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (animationDone) {
			const timer = setTimeout(() => {
				setDisplayTagline(true)
			}, 1000)

			return () => clearTimeout(timer)
		}
	}, [animationDone])

	useEffect(() => {
		if (displayTagline) {
			const timer = setTimeout(() => {
				setTaglineDone(true)
			}, 2000)

			return () => clearTimeout(timer)
		}
	}, [displayTagline])

	useEffect(() => {
		if (taglineDone) {
			const timer = setTimeout(() => {
				setDisplayHome(true)
			}, 1000)

			return () => clearTimeout(timer)
		}
	}, [taglineDone])

	return (
		<div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
			<LogoAnimation />

			{animationDone && (
				<motion.div
					initial={{ y: "100vh" }}
					animate={{ y: "0vh" }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="absolute w-[100%] h-[100vh] bg-black"
				/>
			)}

			{displayTagline && <Tagline />}
			{taglineDone && (
				<motion.div
					initial={{ y: "-100vh" }}
					animate={{ y: "0vh" }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="absolute w-[100%] h-[100vh] bg-white"
				/>
			)}
			{displayHome && <Events />}
			{/* {displayEvent && <Events />} */}

			{/* <Events /> */}
		</div>
	)
}

export default App