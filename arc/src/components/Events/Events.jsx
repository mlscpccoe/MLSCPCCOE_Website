"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Card from "../Card/Card"

const Events = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const events = [
		{
			name: "Techroom 2024",
			color: "#f34f1c",
			desc: "The Microsoft Learn Student Chapter at PCCOE hosted the Tech Room, offering students with an introduction to key technical domains, including AI/ML, Web Development, and Competitive Programming. Mentors from each domain shared their expertise, highlighting the importance of practical knowledge and hands-on experience in mastering these areas. The session emphasized active participation, collaboration, and exposure to industry-standard tools and platforms.",
			photo1: "https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741100322/mlscevents/techroom1.jpg",
			photo2: "https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741100322/mlscevents/techroom2.jpg",
		}, // Orange
		{
			name: "Speaker Session",
			color: "#7fbc00",
			desc: "The Microsoft Learn Student Chapter at PCCOE organized an impactful speaker event, featuring Aakash Sangamnerkar, a Microsoft professional and PCCOE alumnus. The event provided students with valuable industry insights, focusing on placement strategies, interview preparation, and soft skills development. It also marked the inauguration of the MLSC, emphasizing its role in fostering learning and growth for students.",
			photo1: "https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741100322/mlscevents/speaker1.jpg",
			photo2: "https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741100322/mlscevents/speaker2.jpg",
		}, // Green

		{
			name: "Techroom 2025",
			color: "#ffba01",
			desc: "The Microsoft Learn Student Chapter at PCCOE returned with Techroom, an initiative aimed at strengthening students’ understanding of AI/ML, Web Development, and Competitive Programming. Building on past success, the session emphasized structured mentor-led discussions and interactive learning experiences, encouraging hands-on practice, collaboration, and exposure to industry-grade tools and technologies",
			photo1: "https://res.cloudinary.com/dyricwenw/image/upload/v1766687482/Techroom2025_02_ywzytd.jpg",
			photo2: "https://res.cloudinary.com/dyricwenw/image/upload/v1766687480/Techroom2025_artcrx.jpg",
		}, // Yellow
		{
			name: "Logic Building Session",
			color: "#01a6f0",
			desc: "The Microsoft Learn Student Chapter at PCCOE organized an logic building session aimed at guiding students in their competitive programming journey. The session was conducted by Mr. Siddhesh Patil, who shared valuable insights into the fundamentals of competitive programming, choosing the right programming languages and platforms, effective practice strategies and useful resources.",
			photo1: "https://res.cloudinary.com/dyricwenw/image/upload/v1766687978/LogicBuilding_1_rd9myb.jpg",
			photo2: "https://res.cloudinary.com/dyricwenw/image/upload/v1766687799/LogicBuilding_02_m3pfgt.jpg",
		}, // Blue
		{
			name: "Praxis 2026",
			color: "#f34f1c",
			desc: "The PRAXIS – MINDSCAPE event commenced successfully with enthusiastic participation from competing teams. The event features four competitive rounds: Tech Quiz (Elimination Round), Debug Sprint (Web Development), AI Innovation Challenge, and Progressive Competitive Programming. Participants demonstrated strong technical expertise, analytical thinking, and problem-solving capabilities throughout the competition",
			photo1: "https://res.cloudinary.com/dyricwenw/image/upload/v1772031361/WhatsApp_Image_2026-02-25_at_8.24.32_PM_erztb7.jpg",
			photo2: "https://res.cloudinary.com/dyricwenw/image/upload/v1772031361/WhatsApp_Image_2026-02-25_at_8.24.33_PM_yuqgwy.jpg",
		}, // Orange
	]
	const liveEvent = {
		name: "BlueBit National Level Hackathon",
		link: "https://unstop.com/o/bZLlxtJ?lb=R4QnuuJ3&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Nandkvas3785",
	}
	const nextCard = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === events.length - 1 ? 0 : prevIndex + 1,
		)
	}

	const prevCard = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? events.length - 1 : prevIndex - 1,
		)
	}

	return (
		<section className="relative h-screen bg-neutral-900" id="Events">
			<div className="w-full h-screen bg-neutral-100 bg-[repeating-linear-gradient(45deg,_rgba(0,0,0,0.1)_0,_rgba(0,0,0,0.1)_1px,_transparent_1px,_transparent_20px),_repeating-linear-gradient(135deg,_rgba(0,0,0,0.1)_0,_rgba(0,0,0,0.1)_1px,_transparent_1px,_transparent_20px)] bg-[length:20px_20px] overflow-hidden flex flex-col items-center justify-center">
				<div className="text-black text-center text-6xl font-bold mb-12 hover:tracking-wide transition-all duration-300">
					Events
				</div>

				<div className="relative w-full h-[60vh] flex items-center justify-center">
					<div className=" hidden md:block	absolute top-10 right-10 w-[200px] bg-red-600 text-white px-6 py-4 rounded-xl shadow-lg animate-pulse z-50">
						<div className="flex items-center gap-2">
							<span className="font-bold">LIVE NOW</span>
						</div>

						<div className="mt-2 font-semibold break-words">
							{liveEvent.name}
						</div>

						<a
							href={liveEvent.link}
							target="_blank"
							className="mt-3 inline-block w-full text-center bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:scale-105 transition"
						>
							Register Now
						</a>
					</div>

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
