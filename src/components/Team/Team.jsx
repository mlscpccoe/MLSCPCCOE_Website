import TeamCard from "../TeamCard/TeamCard"
import { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
// import cat from "../../assets/cat.png"

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

	const x = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"])

	return (
		<section className="relative h-[400vh] bg-neutral-900" ref={target} id="Team">
			<div className="absolute inset-0 opacity-[1] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 2000 1000%22 xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter id=%22a%22%3E%3CfeTurbulence type=%22fractalNoise%122 baseFrequency=%221%22 numOctaves=%223%22 stitchTiles=%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23a)%22%2F%3E%3C%2Fsvg%3E')]"></div>
			<div className="w-full sticky top-0 h-screen flex justify-center items-center bg-neutral-100 overflow-hidden">
				<div className="absolute inset-0 bg-grid-neutral-900/[0.03] -z-0"></div>

				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px] -z-0"></div>
				<h2 className="text-black text-5xl absolute top-[7rem] z-10 font-bold hover:tracking-wide transition-all duration-300 max-md:text-2xl">
					MLSC TEAM 2024-25
				</h2>
				<motion.div className="flex flex-row" style={{ x }}>
					{Array.from({ length: 13 }, (_, index) => (
						<div
							key={index}
							className="hover:scale-105 transition-all duration-300 max-md:scale-90"
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
									imageSrc="https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741012879/mlscteam/sarthak.jpg"
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
				</motion.div>
			</div>
		</section>
	)
}

export default Team
