import { motion } from "framer-motion"

const Tagline = () => {
	const text = "Breaking Norms, Setting Standards."

	// Define the animation variant for the text stacks
	const stackVariant = {
		hidden: { opacity: 0, y: 0 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.2, duration: 0.3, ease: "easeOut" },
		}),
	}

	// Render the stacked text multiple times
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="space-y-0">
				{/* Stack the text multiple times */}
				{Array.from({ length: 9 }).map((_, i) => (
					<motion.h1
						key={i}
						custom={i}
						initial={{
							marginBottom: "-4%",
						}}
						animate={{
							marginBottom: `0.5%`,
							transition: { duration: 1 },
						}}
						exit={{
							marginBottom: "-4%",
							transition: { duration: 0.5, ease: "easeOut" },
						}}
						variants={stackVariant}
						className="text-5xl font-bold text-white"
					>
						{text}
					</motion.h1>
				))}
			</div>
		</div>
	)
}

export default Tagline
