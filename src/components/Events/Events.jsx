"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Card from "../Card/Card"

const Events = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const events = [
		{
			name: "MLSC Techroom",
			color: "#f34f1c",
			desc: "The Microsoft Learn Student Chapter at PCCOE hosted the Tech Room, offering students with an introduction to key technical domains, including AI/ML, Web Development, and Competitive Programming. Mentors from each domain shared their expertise, highlighting the importance of practical knowledge and hands-on experience in mastering these areas. The session emphasized active participation, collaboration, and exposure to industry-standard tools and platforms.",
			photo1: "https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741100322/mlscevents/techroom1.jpg",
			photo2: "https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741100322/mlscevents/techroom2.jpg",
		}, // Orange
		{
			name: "MLSC Speaker Session",
			color: "#7fbc00",
			desc: "The Microsoft Learn Student Chapter at PCCOE organized an impactful speaker event, featuring Aakash Sangamnerkar, a Microsoft professional and PCCOE alumnus. The event provided students with valuable industry insights, focusing on placement strategies, interview preparation, and soft skills development. It also marked the inauguration of the MLSC, emphasizing its role in fostering learning and growth for students.",
			photo1: "https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741100322/mlscevents/speaker1.jpg",
			photo2: "https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741100322/mlscevents/speaker2.jpg",
		}, // Green
		// { name: "Annual Summit", color: "#ffba01" }, // Yellow
		// { name: "Hackathon", color: "#01a6f0" }, // Blue
	]

	const nextCard = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === events.length - 1 ? 0 : prevIndex + 1
		)
	}

	const prevCard = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? events.length - 1 : prevIndex - 1
		)
	}

	return (
		<section className="relative h-screen bg-neutral-900" id="Events">
			<div className="w-full h-screen bg-neutral-100 bg-[repeating-linear-gradient(45deg,_rgba(0,0,0,0.1)_0,_rgba(0,0,0,0.1)_1px,_transparent_1px,_transparent_20px),_repeating-linear-gradient(135deg,_rgba(0,0,0,0.1)_0,_rgba(0,0,0,0.1)_1px,_transparent_1px,_transparent_20px)] bg-[length:20px_20px] overflow-hidden flex flex-col items-center justify-center">
				<div className="text-black text-center text-6xl font-bold mb-12 hover:tracking-wide transition-all duration-300">
					Events
				</div>

				<div className="relative w-full h-[60vh] flex items-center justify-center">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
							className="absolute flex justify-center"
						>
							<Card
								color={events[currentIndex].color}
								desc={events[currentIndex].desc}
								name={events[currentIndex].name}
								photo1={events[currentIndex].photo1}
								photo2={events[currentIndex].photo2}
							/>
						</motion.div>
					</AnimatePresence>
				</div>

				<div className="flex items-center justify-center gap-12 mt-8">
					<button
						onClick={prevCard}
						className="p-3 rounded-full bg-neutral-200/20 hover:bg-neutral-300 duration-300 transition-colors"
						aria-label="Previous event"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>

					<div className="text-black text-xl min-w-[200px] text-center font-bold">
						{events[currentIndex].name}
					</div>

					<button
						onClick={nextCard}
						className="p-3 rounded-full bg-neutral-200/20 hover:bg-neutral-300 duration-300 transition-colors"
						aria-label="Next event"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>
		</section>
	)
}

export default Events
