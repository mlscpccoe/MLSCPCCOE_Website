import AchieveCard from "../AchieveCard/AchieveCard"

const Achievements = () => {
	const colors = [
		"#f34f1c", // Orange
		"#7fbc00", // Green
		"#ffba01", // Yellow
		"#01a6f0", // Blue
	]

	const achievements = [
		{
			name: "Smart India Hackathon Winner",
			description: `Payal Pawar, Siddhesh Patil, Pawan Patil from the MLSC PCCoE Team won the 2025 edition of Smart India Hackathon`,

			image: "https://res.cloudinary.com/dweebldig/image/upload/v1741514135/Screenshot_2025-03-09_152400_cyunoq.png",
		},
		{
			name: "BMC Hackathon Winner",
			description:
				"Adinath Yadav from the MLSC PCCoE Team secured 2nd place in the BMC Software India Hackathon.",
			image: "https://res.cloudinary.com/dweebldig/image/upload/v1741514351/Screenshot_2025-03-09_152853_zxzh3a.png",
		},

		{
			name: "ICPC Regionals",
			description:
				"Siddhesh Patil from the MLSC PCCoE Team participated in the prestigious ICPC Kanpur regionals",
			image: "https://res.cloudinary.com/dcgb5c6y8/image/upload/t_icpc2/icpc",
		},
	]

	return (
		<div
			className="relative w-full h-[165vh] bg-stone-950 max-md:h-[220vh]"
			id="Achievements"
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
							Achievements Achievements Achievements
						</span>
					))}
				</div>
			</div>

			{/* Main content */}
			<h2 className="relative z-10 text-neutral-50 text-5xl text-center font-bold hover:tracking-wide transition-all duration-300 pt-32 max-md:pt-4 max-md:text-3xl">
				Achievements
			</h2>

			<div className="relative z-10 flex flex-col w-3/4 mx-auto mt-32 space-y-8 max-md:mt-8">
				{achievements.map((achieve, index) => (
					<div key={index} className="flex flex-col md:flex-row max-md:mt-4">
						<AchieveCard
							alt={index % 2 === 1}
							color={colors[index % colors.length]}
							name={achieve.name}
							description={achieve.description}
							image={achieve.image}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Achievements
