import AchieveCard from "../AchieveCard/AchieveCard"

const Projects = () => {
	const colors = [
		"#f34f1c", // Orange
		"#7fbc00", // Green
		"#ffba01", // Yellow
		"#01a6f0", // Blue
	]

	return (
		<div
			className="relative w-full h-[200vh] bg-stone-950 max-md:h-[250vh]"
			id="Projects"
		>
			{/* Background text */}
			<div className="absolute inset-0 opacity-[0.02] text-neutral-50 text-[8rem] font-bold tracking-wider overflow-hidden">
				<div className="flex flex-wrap w-full h-full">
					{Array.from({ length: 20 }).map((_, index) => (
						<span
							key={index}
							className="whitespace-nowrap"
							style={{
								transform:
									index % 2 === 0
										? "translateX(-50%)"
										: "translateX(0)",
							}}
						>
							Projects Projects Projects
						</span>
					))}
				</div>
			</div>

			{/* Main content */}
			<h2 className="relative z-10 text-neutral-50 text-5xl text-center font-bold hover:tracking-wide transition-all duration-300 pt-32 max-md:pt-4">
				Projects
			</h2>

			<div className="relative z-10 flex flex-col w-3/4 mx-auto mt-32 max-md:mt-4">
				{Array.from({ length: 4 }, (_, index) => (
					<div key={index} className="max-md:my-4">
						<AchieveCard
							alt={index % 2 === 1}
							color={colors[index % colors.length]}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
