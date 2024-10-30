import random from "../../assets/random.png"
import Reveal from "../Reveal/Reveal"
import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const AchieveCard = ({ alt = false, color }) => {
	const ref = useRef(null)

	const variants = {
		hidden: { opacity: 0, y: 75 },
		visible: { opacity: 1, y: 0 },
	}

	const isInView = useInView(ref, { once: false })
	const mainControls = useAnimation()

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible")
		} else {
			mainControls.start("hidden")
		}
	}, [isInView, mainControls])

	return (
		<div
			className={`flex ${
				alt ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
			} justify-between items-center w-full my-4`}
		>
			<div className="w-full md:w-1/3">
				<Reveal color={color}>
					<span
						className="text-neutral-100 text-2xl md:text-4xl block font-semibold mb-4"
						style={{ color }}
					>
						Lorem ipsum dolor sit.
					</span>
				</Reveal>
				<Reveal color={color}>
					<span className="text-neutral-200 text-base md:text-lg ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						animi soluta error dolorem deleniti. Unde ab at debitis itaque
						nulla inventore distinctio reprehenderit, alias repellendus
						consequuntur saepe dolores nemo delectus?
					</span>
				</Reveal>
			</div>
			<motion.div
				ref={ref}
				className="w-full md:w-1/3 max-md:mt-4"
				variants={variants}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				<img src={random} alt="" className="w-full h-auto" />
			</motion.div>
		</div>
	)
}

export default AchieveCard
