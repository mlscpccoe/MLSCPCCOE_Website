import Card from "../Card/Card"
import { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"

const Events = () => {
	const target = useRef(null)

	const { scrollYProgress } = useScroll({
		target: target,
	})

	const x = useTransform(scrollYProgress, [0, 1], ["-50%", "30%"])

	return (
		<section className="relative h-[400vh] bg-neutral-900" ref={target}>
			<div className="w-full sticky top-0 h-screen flex justify-center items-center bg-violet-600 overflow-hidden">
				<motion.div className="flex flex-row" style={{ x }}>
					{Array.from({ length: 10 }, (_, index) => (
						<div key={index}>
							<Card text={index} />
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default Events
