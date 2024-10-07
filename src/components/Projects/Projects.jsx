import Card from "../Card/Card"
import { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"

const Projects = () => {
	const target = useRef(null)

	const { scrollYProgress } = useScroll({
		target: target,
	})

	const x = useTransform(scrollYProgress, [0, 1], ["35%", "-35%"])

	return (
		<section className="relative h-[400vh] bg-neutral-900" ref={target}>
			<div className="w-full sticky top-0 h-screen bg-violet-600 overflow-hidden">
				<div className="text-black text-center text-8xl font-semibold poppins-semibold mt-20">
					Events
				</div>
				<div className="w-full sticky top-0 h-screen flex justify-center mt-16 bg-violet-600 overflow-hidden">
					<motion.div
						className="flex flex-row ml-96 mr-96 gap-96"
						style={{ x }}
					>
						<Card />
						<Card />
						<Card />
						<Card />
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Projects
