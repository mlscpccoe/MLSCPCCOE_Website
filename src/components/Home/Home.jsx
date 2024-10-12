import { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import Hero from "../Hero/Hero"
import ThreeD from "../ThreeD/ThreeD"

const Home = () => {
	const containerRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: containerRef,
	})

	const xHero = useTransform(scrollYProgress, [0.5, 0.8], ["100vw", "0vw"])

	return (
		<div ref={containerRef} className="w-screen h-[300vh] bg-stone-950" id="Home">
			<div className="w-full h-screen sticky top-0">
				<div className="absolute top-0 left-0 w-full h-full">
					<ThreeD />
				</div>
			</div>

			<div className="w-full h-screen sticky top-0">
				<motion.div
					className="absolute top-0 right-0 w-full h-full transform -translate-y-1/2"
					style={{ x: xHero }}
				>
					<Hero />
				</motion.div>
			</div>
		</div>
	)
}

export default Home
