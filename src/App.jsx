import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Tagline from "./components/Tagline/Tagline"
import Main from "./components/Main/Main"
import LogoAnimation from "./components/LogoAnimation/LogoAnimation"

function App() {
	const [animationDone, setAnimationDone] = useState(false)
	const [displayTagline, setDisplayTagline] = useState(false)
	const [taglineDone, setTaglineDone] = useState(false)
	const [displayHome, setDisplayHome] = useState(false)

	// Logo animation complete after 2 seconds
	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimationDone(true)
		}, 2000) // 2 seconds delay for logo animation

		return () => clearTimeout(timer)
	}, [])

	// Show tagline 1 second after logo animation is done
	useEffect(() => {
		if (animationDone) {
			const timer = setTimeout(() => {
				setDisplayTagline(true)
			}, 3000) // 0.5 second delay after logo animation

			return () => clearTimeout(timer)
		}
	}, [animationDone])

	// End tagline animation after 2 seconds
	useEffect(() => {
		if (displayTagline) {
			const timer = setTimeout(() => {
				setTaglineDone(true)
			}, 500) // 2 seconds for tagline display

			return () => clearTimeout(timer)
		}
	}, [displayTagline])

	// Display home after tagline finishes
	useEffect(() => {
		if (taglineDone) {
			const timer = setTimeout(() => {
				setDisplayHome(true)
			}, 1000) // 1 second delay after tagline

			return () => clearTimeout(timer)
		}
	}, [taglineDone])

	return (
		<div className="w-screen h-screen flex justify-center items-center relative">
			{/* Render LogoAnimation only if animationDone is false */}
			{!animationDone && <LogoAnimation />}

			<AnimatePresence>
				{/* Black screen transition */}
				{animationDone && !displayTagline && (
					<motion.div
						key="black-screen"
						initial={{ y: "100vh" }}
						animate={{ y: "0vh" }}
						exit={{ y: "-100vh" }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black"
					>
						<Tagline />
					</motion.div>
				)}

				{/* White transition after tagline */}
				{taglineDone && !displayHome && (
					<motion.div
						key="white-screen"
						initial={{ y: "-100vh" }}
						animate={{ y: "0vh" }}
						exit={{ y: "-100vh" }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="fixed top-0 left-0 w-full h-full bg-white z-50"
					/>
				)}

				{/* Display Home */}
				{displayHome && (
					<motion.div
						key="home"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="w-full h-full"
					>
						<Main />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default App
