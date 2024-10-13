import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import random from "../../assets/random.png"

const projects = [
	{
		name: "Sarthak",
		title: "AI-Powered Chat Application",
		description:
			"Developed a real-time chat application with AI-driven response suggestions and sentiment analysis.",
	},
	{
		name: "Tushar",
		title: "E-commerce Platform Redesign",
		description:
			"Revamped a major e-commerce platform, improving user experience and increasing conversion rates by 25%.",
	},
	{
		name: "Anjali",
		title: "Blockchain-based Supply Chain Solution",
		description:
			"Created a transparent and secure supply chain management system using blockchain technology.",
	},
	{
		name: "Rahul",
		title: "Mobile Health Tracking App",
		description:
			"Designed and developed a comprehensive health tracking app with integration to wearable devices.",
	},
]

// MLSC colors
const MLSCColors = ["#f34f1c", "#7fbc00", "#ffba01", "#01a6f0"]

const ProjectName = ({ name, isActive, index }) => (
	<motion.div
		initial={{ opacity: 0, x: -50 }}
		animate={{
			opacity: isActive ? 1 : 0.3,
			x: isActive ? 0 : -20,
		}}
		transition={{ duration: 0.5 }}
		className={`text-2xl md:text-3xl font-semibold leading-none mb-8 ${
			isActive ? "text-neutral-100" : "text-white"
		}`}
	>
		{isActive ? (
			<span style={{ color: MLSCColors[index % MLSCColors.length] }}>
				Developed by - {name}
			</span>
		) : null}
		{!isActive && name}
	</motion.div>
)

const ProjectDetails = ({ project, isVisible }) => (
	<motion.div
		initial={{ opacity: 0, y: 25 }}
		animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 25 }}
		transition={{ duration: 0.5 }}
		className=""
	>
		<h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-100">
			{project.title}
		</h3>
		<p className="text-lg text-gray-300 mb-8">{project.description}</p>

		<img
			src={random}
			width={600}
			height={400}
			alt={`Project screenshot for ${project.title}`}
			className="rounded-lg transition-transform duration-300 group-hover:scale-105"
		/>
		<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
	</motion.div>
)

export default function ProjectsShowcase() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const containerRef = useRef(null)
	const detailsRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: detailsRef,
		offset: ["start start", "end start"],
	})

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

	useEffect(() => {
		const handleScroll = () => {
			if (detailsRef.current) {
				const projectElements = detailsRef.current.children
				let newIndex = 0

				// Adjust this value to trigger the change earlier (e.g., 10vh above)
				const offset = window.innerHeight * 0.2 // 10% of the viewport height

				for (let i = 0; i < projectElements.length; i++) {
					const projectRect = projectElements[i].getBoundingClientRect()
					const projectMidPoint = projectRect.top + projectRect.height / 2

					// Check if the midpoint + offset is within the viewport height
					if (
						projectMidPoint + offset > 0 &&
						projectMidPoint + offset < window.innerHeight
					) {
						newIndex = i
						break
					}
				}

				if (newIndex !== currentIndex) {
					setCurrentIndex(newIndex)
				}
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [currentIndex])

	return (
		<div className="bg-stone-950 min-h-screen" id="Projects">
			<div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<h2 className="text-4xl md:text-5xl uppercase tracking-wider text-center font-semibold mb-24 text-white">
					Projects
				</h2>

				<div
					className="flex flex-col md:flex-row items-start"
					ref={containerRef}
				>
					<div className="w-full md:w-1/2 md:sticky md:top-24 h-[calc(100vh-6rem)] flex flex-col justify-center">
						<motion.div style={{ y }} className="space-y-8">
							{projects.map((project, index) => (
								<ProjectName
									key={project.name}
									name={project.name}
									isActive={currentIndex === index}
									index={index} // Pass the index to rotate colors
								/>
							))}
						</motion.div>
					</div>
					<div
						className="w-full md:w-2/3 space-y-48 mt-12 md:mt-0"
						ref={detailsRef}
					>
						{projects.map((project, index) => (
							<div
								key={project.name}
								className={`${
									index === projects.length - 1 ? "pb-24" : ""
								}`}
							>
								<ProjectDetails
									project={project}
									isVisible={currentIndex === index}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
