import AchieveCard from "../AchieveCard/AchieveCard"

const Achievements = () => {
	const colors = [
		"#f34f1c", // Orange
		"#7fbc00", // Green
		"#ffba01", // Yellow
		"#01a6f0", // Blue
	]

	return (
		<div className="w-full h-[200vh] bg-stone-950" id="Achievements">
			<h2 className="text-neutral-50 text-5xl text-center font-bold hover:tracking-wide transition-all duration-300 pt-32">
				Achievements
			</h2>

			<div className="flex flex-col w-3/4 mx-auto mt-32">
				{Array.from({ length: 4 }, (_, index) => (
					<div key={index}>
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

export default Achievements
