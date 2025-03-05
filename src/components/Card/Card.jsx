import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Card = ({ color, desc, photo1, photo2 }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [
		{ type: "desc", content: desc },
		{ type: "photo", content: photo1 },
		{ type: "photo", content: photo2 },
	]

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
	}

	return (
		<div
			className="w-4/5 sm:w-2/3 h-auto sm:h-[30rem] border-2 border-black bg-white transition-all duration-200 relative"
			style={{ backgroundColor: color }}
		>
			{/* Desktop Layout */}
			<div className="hidden sm:flex flex-row justify-center items-center h-full">
				<div className="w-1/3 mx-4 font-semibold">{desc}</div>
				<img
					src={photo1}
					alt=""
					className="w-1/3 h-[28rem] my-4 ml-4 mr-2 border-2 border-stone-800 object-cover"
				/>
				<img
					src={photo2}
					alt=""
					className="w-1/3 h-[28rem] my-4 ml-2 mr-4 border-2 border-stone-800 object-cover"
				/>
			</div>

			{/* Mobile Carousel Layout */}
			<div className="sm:hidden relative w-full h-[30rem] flex items-center justify-center overflow-hidden">
				{/* Navigation Buttons */}
				<button
					onClick={prevSlide}
					className="absolute left-2 z-10 bg-white/20 rounded-full p-2"
				>
					<ChevronLeft />
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-2 z-10 bg-white/20 rounded-full p-2"
				>
					<ChevronRight />
				</button>

				{/* Carousel Content with Smooth Transition */}
				<div
					className="w-full h-full flex transition-transform duration-300 ease-in-out"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{slides.map((slide, index) => (
						<div
							key={index}
							className="flex-shrink-0 w-full h-full flex items-center justify-center p-4 text-center"
						>
							{slide.type === "desc" ? (
								<p className="w-full">{slide.content}</p>
							) : (
								<img
									src={slide.content}
									alt=""
									className="w-full h-full object-cover border-2 border-stone-800"
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Card
