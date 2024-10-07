import { useState, useEffect } from "react"
import github from "../../assets/github.png"
import githubcolor from "../../assets/githubcolor.png"
import instagram from "../../assets/instagram.png"
import instagramcolor from "../../assets/instagramcolor.png"
import linkedin from "../../assets/linkedin.png"
import linkedincolor from "../../assets/linkedincolor.png"

const Hero = () => {
	const [isLinkedinHovered, setIsLinkedinHovered] = useState(false)
	const [isInstagramHovered, setIsInstagramHovered] = useState(false)
	const [isGithubHovered, setIsGithubHovered] = useState(false)
	const [currentWordIndex, setCurrentWordIndex] = useState(-1)

	const words = [
		{ english: "Microsoft", hindi: "माइक्रोसॉफ्ट", color: "#f34f1c" },
		{ english: "Learn", hindi: "लर्न", color: "#7fbc00" },
		{ english: "Student", hindi: "स्टूडेंट", color: "#ffba01" },
		{ english: "Club", hindi: "क्लब", color: "#01a6f0" },
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex((prev) => (prev + 1) % words.length)
		}, 1000)

		return () => clearInterval(interval)
	}, [words.length])

	return (
		<div className="w-screen h-screen flex backdrop-blur-md flex-col justify-center items-center pb-72">
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
				<span className="w-12 h-10 mx-1 mt-1">
					<img
						src={isGithubHovered ? githubcolor : github}
						alt="GitHub"
						className="w-14 transition-transform duration-300 hover:scale-105"
						onMouseEnter={() => setIsGithubHovered(true)}
						onMouseLeave={() => setIsGithubHovered(false)}
					/>
				</span>
			</div>
		</div>
	)
}

export default Hero
