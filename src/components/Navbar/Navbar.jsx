import { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Link } from "react-scroll"

const Navbar = () => {
	const { scrollY } = useScroll()
	const [hidden, setHidden] = useState(false)
	useMotionValueEvent(scrollY, "change", (latest) => {
		const prev = scrollY.getPrevious()
		if (latest > prev && latest > 150) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})
	return (
		<motion.div
			className="fixed -translate-x-1/2 left-1/2 mt-6 z-[500]"
			variants={{
				visible: { y: 0, x: "-50%" },
				hidden: { y: "-200%", x: "-50%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
		>
			<SlideTabs />
		</motion.div>
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
			className="relative mx-auto flex w-fit rounded-full border-2 bg-neutral-200 p-1 font-semibold"
		>
			{["Home", "Events", "Achievements", "Team", "Projects"].map(
				(tab, index) => (
					<Link key={index} to={tab} smooth={true} duration={1000}>
						<Tab setPosition={setPosition} index={index}>
							{tab}
						</Tab>
					</Link>
				)
			)}

			<Cursor position={position} />
		</ul>
	)
}

const Tab = ({ children, setPosition, index }) => {
	const ref = useRef(null)

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
					color: colors[index],
				})
			}}
			className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black md:px-5 md:py-3 md:text-base`}
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
