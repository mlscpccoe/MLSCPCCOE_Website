import TeamCard from "../TeamCard/TeamCard"
import { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import cat from "../../assets/cat.png"

const Team = () => {
	const target = useRef(null)

	const { scrollYProgress } = useScroll({
		target: target,
	})

	const colors = [
		"#f34f1c", // Orange
		"#7fbc00", // Green
		"#ffba01", // Yellow
		"#01a6f0", // Blue
	]

	const x = useTransform(scrollYProgress, [0, 1], ["30%", "-35%"])

	return (
		<section className="relative h-[400vh] bg-neutral-900" ref={target} id="Team">
			<div className="absolute inset-0 opacity-[1] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 2000 1000%22 xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter id=%22a%22%3E%3CfeTurbulence type=%22fractalNoise%122 baseFrequency=%221%22 numOctaves=%223%22 stitchTiles=%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23a)%22%2F%3E%3C%2Fsvg%3E')]"></div>
			<div className="w-full sticky top-0 h-screen flex justify-center items-center bg-neutral-100 overflow-hidden">
				<div className="absolute inset-0 bg-grid-neutral-900/[0.03] -z-0"></div>

				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px] -z-0"></div>
				<h2 className="text-black text-5xl absolute top-[7rem] z-10 font-bold hover:tracking-wide transition-all duration-300">
					MLSC TEAM 2024-25
				</h2>
				<motion.div className="flex flex-row" style={{ x }}>
					{Array.from({ length: 10 }, (_, index) => (
						<div
							key={index}
							className="hover:scale-105 transition-all duration-300"
						>
							<motion.div
								initial={{
									y: 400,
								}}
								whileInView={{
									y: 50,
									transition: {
										type: "linear",
										duration: 0.3,
										delay: 0.2,
									},
								}}
							>
								<TeamCard
									imageSrc={cat}
									name="Sarthak Joshi"
									role="Web Development Head"
									color={colors[index % colors.length]}
									rotation={
										Math.floor(Math.random() * (8 + 8 + 1)) + -8
									}
								/>
							</motion.div>
						</div>
					))}
					<div className="w-[20rem] h-[26rem] m-4 flex flex-col items-center justify-center font-semibold text-lg hover:scale-105 hover:translate-x-5 transition-all duration-300">
						Meet rest of the awesome folks!
						<svg
							width="20"
							height="20"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Team
