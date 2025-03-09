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
			description:
				`🏆 Team Anurved wins SIH 2024! 🚀  
"Sahakar" enhances govt collaboration with AI, GIS, & geotagged conflict resolution. 🎉` , 

			image: "https://res.cloudinary.com/dweebldig/image/upload/v1741514135/Screenshot_2025-03-09_152400_cyunoq.png", // Replace with actual image path
		},
		{
			"name": "BMC Hackathon Winner",
			"description": "Secured 2nd place 🏆 in the BMC Software India Hackathon. It was an intense 72-hour AI/ML and Data Science challenge, where we pushed our limits, collaborated, and innovated to build a solution within the given timeframe.",
			"image": "https://res.cloudinary.com/dweebldig/image/upload/v1741514351/Screenshot_2025-03-09_152853_zxzh3a.png"
		},
		  
		{
			name: "Connectwise Internship",
			description: "Our team member has secured an internship at ConnectWise with a ₹25,000 monthly stipend! 🎉💼 Kudos to their hard work and dedication! 👏",
			image: "https://res.cloudinary.com/dweebldig/image/upload/v1741514810/download_cu40ny.png" // Replace with actual image path
		}
		
		
	]

	return (
		<div className="relative w-full h-fit bg-stone-950" id="Achievements">
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
					<div key={index} className="flex flex-col md:flex-row">
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
