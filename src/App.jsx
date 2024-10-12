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

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimationDone(true)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (animationDone) {
			const timer = setTimeout(() => {
				setDisplayTagline(true)
			}, 2000)

			return () => clearTimeout(timer)
		}
	}, [animationDone])

	useEffect(() => {
		if (displayTagline) {
			const timer = setTimeout(() => {
				setTaglineDone(true)
			}, 0)

			return () => clearTimeout(timer)
		}
	}, [displayTagline])

	useEffect(() => {
		if (taglineDone) {
			const timer = setTimeout(() => {
				setDisplayHome(true)
			}, 200)

			return () => clearTimeout(timer)
		}
	}, [taglineDone])

	return (
		<div className="w-screen h-screen flex justify-center items-center ">
			{!animationDone && <LogoAnimation />}

			<AnimatePresence>
				{/* Black screen transition */}
				{animationDone && !displayTagline && (
					<motion.div
						key="black-screen"
						initial={{
							width: "100%",
							height: "0%",
							top: "50%",
							left: "0%",
							x: "0%",
							y: "-50%",
						}}
						animate={{
							width: "100%",
							height: "100%",
							top: "50%",
							left: "0%",
							x: "0%",
							y: "-50%",
						}}
						exit={{
							width: "100%",
							height: "0%",
							top: "50%",
							left: "0%",
							x: "0%",
							y: "-50%",
						}}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="fixed flex justify-center items-center bg-black"
					>
						<Tagline />
					</motion.div>
				)}

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
