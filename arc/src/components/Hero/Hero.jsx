import { useState, useEffect } from "react"
import instagram from "../../assets/instagram.png"
import instagramcolor from "../../assets/instagramcolor.png"
import linkedin from "../../assets/linkedin.png"
import linkedincolor from "../../assets/linkedincolor.png"
import { motion, useScroll, useTransform } from "framer-motion"

const Hero = () => {
	const { scrollYProgress } = useScroll()
	const scale = useTransform(scrollYProgress, [0, 0.11, 0.15], [0, 1, 1.5])
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
			className="w-screen h-screen flex backdrop-blur-md flex-col justify-center items-center"
			style={{ scale }}
		>
			<h1 className="text-6xl font-semibold text-neutral-100">
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
			<h2 className="text-3xl font-semibold text-neutral-200 mt-2">
				Pimpri Chinchwad College of Engineering
			</h2>
			<span className="text-lg font-light text-neutral-300 w-1/2 text-center mt-8">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
				consectetur ipsam, ducimus cum asperiores, voluptates amet maxime
				expedita veniam quas molestias esse nihil maiores quaerat similique
				doloribus perferendis laudantium nemo.
			</span>
			<span className="text-md font-semibold text-neutral-300 w-1/2 text-center mt-8">
				Stay updated with us on our socials!
			</span>
			<div className="flex mt-4">
				<span className="w-10 h-10 mx-2 mt-2">
					<img
						src={isLinkedinHovered ? linkedincolor : linkedin}
						alt="LinkedIn"
						className="w-10 transition-transform duration-300 hover:scale-105"
						onMouseEnter={() => setIsLinkedinHovered(true)}
						onMouseLeave={() => setIsLinkedinHovered(false)}
					/>
				</span>
				<span className="w-14 h-10 mx-2">
					<img
						src={isInstagramHovered ? instagramcolor : instagram}
						alt="Instagram"
						className="w-16 transition-transform duration-300 hover:scale-105"
						onMouseEnter={() => setIsInstagramHovered(true)}
						onMouseLeave={() => setIsInstagramHovered(false)}
					/>
				</span>
			</div>
		</motion.div>
	)
}

export default Hero
