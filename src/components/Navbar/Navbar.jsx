import { useRef, useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
	return (
		<div className="fixed -translate-x-1/2 left-1/2 mt-6 z-[500]">
			<SlideTabs />
		</div>
	)
}

const SlideTabs = () => {
	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
		color: "",
	})

	return (
		<ul
			onMouseLeave={() => {
				setPosition((pv) => ({
					...pv,
					opacity: 0,
				}))
			}}
			style={{
				borderColor: position.color,
			}}
			className="relative mx-auto flex w-fit rounded-full border-2 bg-white p-1 font-semibold"
		>
			{["Home", "Achievements", "Events", "Team", "Projects"].map(
				(tab, index) => (
					<Tab key={index} setPosition={setPosition} index={index}>
						{tab}
					</Tab>
				)
			)}

			<Cursor position={position} />
		</ul>
	)
}

const Tab = ({ children, setPosition, index }) => {
	const ref = useRef(null)

	// Define the color list based on the index for the cursor
	const colors = [
		"#a1a8ad", // Black
		"#f34f1c", // Orange
		"#7fbc00", // Green
		"#ffba01", // Yellow
		"#01a6f0", // Blue
	]

	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref?.current) return

				const { width } = ref.current.getBoundingClientRect()

				setPosition({
					left: ref.current.offsetLeft,
					width,
					opacity: 1,
					color: colors[index], // Set the cursor color based on the index
				})
			}}
			className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black md:px-5 md:py-3 md:text-base`} // Tabs always have black text on hover
		>
			{children}
		</li>
	)
}

const Cursor = ({ position }) => {
	return (
		<motion.li
			animate={{
				...position,
			}}
			style={{
				backgroundColor: position.color,
			}}
			className="absolute z-0 h-7 rounded-full md:h-12"
		/>
	)
}

export default Navbar
