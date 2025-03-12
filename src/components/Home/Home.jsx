import { useState, useEffect } from "react"
import instagram from "../../assets/instagram.png"
import instagramcolor from "../../assets/instagramcolor.png"
import linkedin from "../../assets/linkedin.png"
import linkedincolor from "../../assets/linkedincolor.png"
import { motion } from "framer-motion"

const Hero = () => {
	const [isLinkedinHovered, setIsLinkedinHovered] = useState(false)
	const [isInstagramHovered, setIsInstagramHovered] = useState(false)
	const [currentWordIndex, setCurrentWordIndex] = useState(-1)

	const words = [
		{ english: "Microsoft", hindi: "माइक्रोसॉफ्ट", color: "#f34f1c" },
		{ english: "Learn", hindi: "लर्न", color: "#7fbc00" },
		{ english: "Student", hindi: "स्टूडेंट", color: "#ffba01" },
		{ english: "Chapter", hindi: "चैप्टर", color: "#01a6f0" },
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex((prev) => (prev + 1) % words.length)
		}, 1000)

		return () => clearInterval(interval)
	}, [words.length])

	return (
		<motion.div
			className="relative w-screen h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 overflow-hidden"
			id="Home"
		>
			{/* Animated background */}
			<div className="absolute inset-0 bg-stone-950">
				{/* Gradient orbs using Microsoft Learn colors */}
				<div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#f34f1c]/20 rounded-full filter blur-3xl animate-pulse"></div>
				<div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#ffba01]/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#7fbc00]/20 rounded-full filter blur-3xl animate-pulse delay-[1500ms]"></div>
				<div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#01a6f0]/20 rounded-full filter blur-3xl animate-pulse delay-[2000ms]"></div>

				{/* Grid pattern overlay */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

				{/* Radial gradient overlay */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]"></div>
			</div>

			{/* Content */}
			<div className="relative z-10">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-100 text-center mx-auto">
					{words.map((word, index) => (
						<span
							key={index}
							className="transition-all duration-300"
							style={{ color: word.color }}
						>
							{currentWordIndex === index ? word.hindi : word.english}{" "}
						</span>
					))}
				</h1>
				<h2 className="text-2xl sm:text-3xl font-semibold text-neutral-200 mt-2 text-center mx-auto">
					Pimpri Chinchwad College of Engineering
				</h2>
				<span className="text-base sm:text-lg font-light text-neutral-300 w-full md:w-1/2 text-center mt-8 mx-auto block">
					At Microsoft Learn Student Chapter PCCOE, we believe in igniting
					curiosity and empowering students to turn ideas into reality. Our
					aim is to build a vibrant tech community through hands-on workshops,
					engaging sessions, and collaborative events. Our goal? To inspire
					the next generation of tech leaders by fostering creativity,
					knowledge, and connections that last a lifetime.
				</span>
				<span className="text-sm sm:text-md font-semibold text-neutral-300 w-full md:w-1/2 text-center mt-8 mx-auto block">
					Stay updated with us on our socials!
				</span>
				<div className="flex mt-4 flex-wrap justify-center">
					<span className="w-10 h-10 mx-2 mt-2">
						<a href="https://www.linkedin.com/company/mlsc-pccoe-chapter">
							<img
								src={isLinkedinHovered ? linkedincolor : linkedin}
								alt="LinkedIn"
								className="w-10 transition-transform duration-300 hover:scale-105"
								onMouseEnter={() => setIsLinkedinHovered(true)}
								onMouseLeave={() => setIsLinkedinHovered(false)}
							/>
						</a>
					</span>
					<span className="w-14 h-10 mx-2">
						<a href="https://www.instagram.com/mlscpccoe/">
							<img
								src={isInstagramHovered ? instagramcolor : instagram}
								alt="Instagram"
								className="w-16 transition-transform duration-300 hover:scale-105"
								onMouseEnter={() => setIsInstagramHovered(true)}
								onMouseLeave={() => setIsInstagramHovered(false)}
							/>
						</a>
					</span>
				</div>
			</div>
		</motion.div>
	)
}

export default Hero
