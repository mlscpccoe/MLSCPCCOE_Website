import { motion } from "framer-motion"

const Tagline = () => {
	const text = "Breaking Norms, Setting Standards."

	const letters = Array.from(text).map((letter, index) => (
		<motion.span
			key={index}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.1, delay: index * 0.04 }}
		>
			{letter}
		</motion.span>
	))

	return (
		<div className="flex justify-center items-center h-screen mr-[40rem] mb-[5rem]">
			<motion.h1 className="text-4xl font-bold text-white w-96">
				{letters}
			</motion.h1>
		</div>
	)
}

export default Tagline
