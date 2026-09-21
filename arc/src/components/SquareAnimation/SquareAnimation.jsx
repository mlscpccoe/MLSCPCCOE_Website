import { motion } from "framer-motion"

const SquareAnimation = () => {
	return (
		<div className="relative w-full h-full">
			{/* Yellow (Bottom Right) */}
			<motion.div
				className="absolute w-12 h-12"
				style={{ backgroundColor: "#ffba01" }}
				initial={{ top: "100vh", left: "10%", scaleY: 8 }}
				animate={{ top: "10%", left: "10%", scaleY: 1 }} // Final position for Red
				transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.1 }}
			/>
			{/* Blue (Bottom Left) */}
			<motion.div
				className="absolute w-12 h-12"
				style={{ backgroundColor: "#01a6f0" }}
				initial={{ right: "100vw", scaleX: 8 }}
				animate={{ top: "10%", left: "-20%", scaleX: 1 }} // Final position for Green
				transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.1 }}
			/>
			{/* Green (Top Right) */}
			<motion.div
				className="absolute w-12 h-12 mb-[0.6rem]"
				style={{ backgroundColor: "#f34f1c" }}
				initial={{ bottom: "100vh", left: "10%", scaleY: 8 }}
				animate={{ bottom: "0%", left: "10%", scaleY: 1 }} // Final position for Blue
				transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.1 }}
			/>
			{/* Red (Top Left) */}
			<motion.div
				className="absolute w-12 h-12 mb-[0.6rem]"
				style={{ backgroundColor: "#7fbc00" }}
				initial={{ left: "100vw", right: "10%", scaleX: 8 }}
				animate={{ bottom: "0%", left: "40%", scaleX: 1 }} // Final position for Yellow
				transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.1 }}
			/>
		</div>
	)
}

export default SquareAnimation
