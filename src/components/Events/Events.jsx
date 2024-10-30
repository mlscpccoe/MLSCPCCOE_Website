import Card from "../Card/Card"
import { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import EventDesc from "../EventDesc/EventDesc"

const Events = () => {
	const target = useRef(null)
	const colors = [
		"#f34f1c", // Orange
		"#7fbc00", // Green
		"#ffba01", // Yellow
		"#01a6f0", // Blue
	]

	const { scrollYProgress } = useScroll({
		target: target,
	})

	const x = useTransform(scrollYProgress, [0, 1], ["50%", "-35%"])

	return (
		<section className="relative h-[400vh] bg-neutral-900" ref={target} id="Events">
			<div
				className="w-full sticky top-0 h-screen bg-neutral-100  bg-[repeating-linear-gradient(45deg,_rgba(0,0,0,0.1)_0,_rgba(0,0,0,0.1)_1px,_transparent_1px,_transparent_20px),_repeating-linear-gradient(135deg,_rgba(0,0,0,0.1)_0,_rgba(0,0,0,0.1)_1px,_transparent_1px,_transparent_20px)] bg-[length:20px_20px]
overflow-hidden"
			>
				<div className="text-black text-center text-6xl font-bold mt-24 hover:tracking-wide transition-all duration-300">
					Events
				</div>
				<div
					className="w-full sticky top-0 h-screen flex justify-center bg-[repeating-linear-gradient(45deg,_rgba(0,0,0,0.1)_0,_rgba(0,0,0,0.1)_1px,_transparent_1px,_transparent_20px),_repeating-linear-gradient(135deg,_rgba(0,0,0,0.1)_0,_rgba(0,0,0,0.1)_1px,_transparent_1px,_transparent_20px)] bg-[length:20px_20px]
 bg-neutral-100 overflow-hidden"
				>
					<motion.div
						className="flex flex-row ml-96 mr-96 gap-96 max-md:gap-2 max-md:ml-0 max-md:mr-0"
						style={{ x }}
					>
						{Array.from({ length: 10 }, (_, index) => (
							<motion.div
								key={index}
								className="hover:scale-105 transition-all duration-300"
								initial={{
									y: 400,
								}}
								whileInView={{
									y: 50,
									transition: {
										type: "spring",
										bounce: 0.2,
										duration: 0.1,
									},
								}}
							>
								<Card color={colors[index % colors.length]} />
								<EventDesc color={colors[index % colors.length]} />
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Events
