import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const Reveal = ({ children, width = "fit-content", color = "#FFFFFF" }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false })
	const mainControls = useAnimation()
	const slideControls = useAnimation()

	const variants = {
		hidden: { opacity: 0, y: 75 },
		visible: { opacity: 1, y: 0 },
	}

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible")
			slideControls.start("visible")
		} else {
			mainControls.start("hidden")
			slideControls.start("hidden")
		}
	}, [isInView, mainControls, slideControls])

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
			<motion.div
				variants={variants}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
			<motion.div
				variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
				initial="hidden"
				animate={slideControls} // Link to slideControls animation
				transition={{ duration: 0.5, ease: "easeIn" }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					background: `${color}`,
					zIndex: 20,
				}}
			/>
		</div>
	)
}

export default Reveal
