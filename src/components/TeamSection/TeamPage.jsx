import { useParams } from "react-router-dom"
import { teamData } from "./teamData"
import { Github, Linkedin, Mail, MapPin, } from "lucide-react"
import { useEffect } from "react"

export default function TeamPage() {
	const { year } = useParams()
	const currentTeam = teamData[year] || []

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [year])

	const headMembers = currentTeam.filter(
		(member) =>
			member.role.toLowerCase().includes("head") ||
			member.role.toLowerCase().includes("president") ||
			member.role.toLowerCase().includes("lead")
	)

	const executiveMembers = currentTeam.filter(
		(member) =>
			!headMembers.includes(member) &&
			(member.role.toLowerCase().includes("executive") ||
				member.role.toLowerCase().includes("team"))
	)

	const TeamSection = ({ title, members, gridCols = "lg:grid-cols-4" }) => {
		if (members.length === 0) return null

		return (
			<div className="mb-20">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-[rgb(243,79,28)] via-[rgb(127,188,0)] via-[rgb(255,186,1)] to-[rgb(1,166,240)] bg-clip-text text-transparent ">
						{title}
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-[rgb(243,79,28)] via-[rgb(127,188,0)] via-[rgb(255,186,1)] to-[rgb(1,166,240)] mx-auto rounded-full mb-4"></div>
				</div>
				
				<div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ${gridCols} gap-8`}>
					{members.map((member, index) => (
						<div key={index} className="group relative perspective-1000">


							
							<div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-700/50 hover:border-gray-600/50
								transform group-hover:rotateY-12 group-hover:rotateX-6 group-hover:scale-105 transition-all duration-700 preserve-3d">

								<div className="relative mb-8 transform group-hover:translateZ-20">
									<div className="relative w-36 h-36 mx-auto mb-4">
										<div className="absolute inset-0 rounded-full border-2 border-dashed border-[rgb(1,166,240)]/30 group-hover:border-[rgb(1,166,240)]/60 transition-colors duration-300 group-hover:animate-spin"></div>
										
										<div className="absolute inset-2 rounded-full border border-[rgb(243,79,28)]/20 group-hover:border-[rgb(243,79,28)]/40 transition-colors duration-300 group-hover:animate-pulse"></div>
										
										<div className="absolute inset-4 rounded-full overflow-hidden ring-4 ring-gray-700/50 group-hover:ring-[rgb(255,186,1)]/50 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
											<img
												src={member.imageSrc}
												alt={member.name}
												className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110"
												onError={(e) => {
													console.log("Image failed to load:", member.imageSrc)
													e.target.style.display = "none"
												}}
											/>
											<div className="absolute inset-0 bg-gradient-to-tr from-[rgb(1,166,240)]/20 via-transparent to-[rgb(243,79,28)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
										</div>
									</div>
								</div>
								
								<div className="text-center space-y-6 relative transform group-hover:translateZ-10">
									<div className="relative">
										<h3 className="text-[1.3rem]/[2.25rem] font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-[rgb(1,166,240)] group-hover:via-white group-hover:to-[rgb(243,79,28)] transition-all duration-500 relative z-10">
											{member.name}
										</h3>
										<h3 className="absolute top-0 left-0 w-full text-[1.3rem]/[2.25rem] font-black text-[rgb(1,166,240)]/30 transform translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-pulse">
											{member.name}
										</h3>
										<h3 className="absolute top-0 left-0 w-full text-[1.3rem]/[2.25rem] font-black text-[rgb(243,79,28)]/30 transform -translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-pulse delay-100">
											{member.name}
										</h3>
									</div>
									
									<div className="relative inline-block">
										<div className="px-6 py-3 bg-gradient-to-r from-gray-800/80 via-gray-700/80 to-gray-800/80 border border-gray-600/50 rounded-full relative overflow-hidden group-hover:border-[rgb(1,166,240)]/50 transition-all duration-300">
											<div className="absolute inset-0 bg-gradient-to-r from-[rgb(1,166,240)]/10 via-[rgb(243,79,28)]/10 to-[rgb(255,186,1)]/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
											
											<p className="text-gray-300 group-hover:text-[rgb(1,166,240)] text-sm font-bold tracking-wider uppercase relative z-10 transition-colors duration-300">
												{member.role}
											</p>
											
										</div>
									</div>

									{member.bio && (
										<div className="relative">
											<p className="text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed max-w-xs mx-auto transition-colors duration-500 font-mono">
												{member.bio}
											</p>
										</div>
									)}
									
									<div className="flex justify-center gap-6 pt-6">
										{member.github && (
											<a
												href={member.github}
												target="_blank"
												rel="noopener noreferrer"
												className="group/icon relative"
											>
												<div className="p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 hover:from-[rgb(243,79,28)]/20 hover:to-[rgb(243,79,28)]/10 rounded-2xl border border-gray-700/50 hover:border-[rgb(243,79,28)]/50 transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-[rgb(243,79,28)]/20">
													<Github className="w-6 h-6 text-gray-400 group-hover/icon:text-[rgb(243,79,28)] transition-colors duration-300" />
												</div>
												<div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[rgb(243,79,28)]/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none">
													GitHub
												</div>
											</a>
										)}

										{member.linkedin && (
											<a
												href={member.linkedin}
												target="_blank"
												rel="noopener noreferrer"
												className="group/icon relative"
											>
												<div className="p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 hover:from-[rgb(1,166,240)]/20 hover:to-[rgb(1,166,240)]/10 rounded-2xl border border-gray-700/50 hover:border-[rgb(1,166,240)]/50 transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-[rgb(1,166,240)]/20">
													<Linkedin className="w-6 h-6 text-gray-400 group-hover/icon:text-[rgb(1,166,240)] transition-colors duration-300" />
												</div>
												<div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[rgb(1,166,240)]/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none">
													LinkedIn
												</div>
											</a>
										)}

										{member.email && (
											<a
												href={`mailto:${member.email}`}
												className="group/icon relative"
											>
												<div className="p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 hover:from-[rgb(127,188,0)]/20 hover:to-[rgb(127,188,0)]/10 rounded-2xl border border-gray-700/50 hover:border-[rgb(127,188,0)]/50 transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-[rgb(127,188,0)]/20">
													<Mail className="w-6 h-6 text-gray-400 group-hover/icon:text-[rgb(127,188,0)] transition-colors duration-300" />
												</div>
												<div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[rgb(127,188,0)]/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none">
													Email
												</div>
											</a>
										)}
									</div>

									{member.location && (
										<div className="flex items-center justify-center gap-3 text-gray-500 text-sm mt-6 group-hover:text-[rgb(1,166,240)] transition-colors duration-300">
											<div className="p-2 bg-gray-800/50 rounded-full group-hover:bg-[rgb(1,166,240)]/20 transition-colors duration-300">
												<MapPin className="w-4 h-4" />
											</div>
											<span className="font-medium tracking-wide">{member.location}</span>
										</div>
									)}
								</div>
								
								<div className="absolute top-0 left-1/2 w-px h-8 bg-gradient-to-b from-[rgb(1,166,240)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="absolute bottom-0 left-1/2 w-px h-8 bg-gradient-to-t from-[rgb(243,79,28)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 via-black to-gray-800 text-white p-8 relative overflow-hidden">
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-2 h-2 bg-[rgb(1,166,240)]/30 rounded-full animate-pulse"></div>
				<div className="absolute top-40 right-20 w-1 h-1 bg-[rgb(243,79,28)]/30 rounded-full animate-ping"></div>
				<div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-[rgb(255,186,1)]/30 rounded-full animate-bounce"></div>
				<div className="absolute bottom-20 right-10 w-2 h-2 bg-[rgb(127,188,0)]/30 rounded-full animate-pulse"></div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="text-center mb-20 relative">
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px top-1/2"></div>
					
					<h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-[rgb(243,79,28)] via-[rgb(127,188,0)] via-[rgb(255,186,1)] to-[rgb(1,166,240)] bg-clip-text text-transparent relative">
						Team {year}
					</h1>

					<p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
						Meet our incredible team of innovators, creators, leaders and visionaries who make magic happen
					</p>
				</div>

				{currentTeam.length === 0 ? (
					<div className="text-center py-20">
						<div className="bg-gradient-to-br from-gray-900/60 to-[rgb(243,79,28)]/10 backdrop-blur-xl rounded-3xl p-16 border border-[rgb(243,79,28)]/30 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
							<div className="w-16 h-16 bg-[rgb(243,79,28)]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
								<span className="text-2xl">⚠️</span>
							</div>
							<p className="text-[rgb(243,79,28)] text-2xl font-bold mb-4">
								No team data found for {year}
							</p>
							<p className="text-gray-400 text-lg">
								Available years: <span className="text-[rgb(1,166,240)] font-semibold">{Object.keys(teamData).join(", ")}</span>
							</p>
						</div>
					</div>
				) : (
					<>
						<TeamSection
							title="Leadership Team"
							members={headMembers}
							gridCols="xl:grid-cols-4"
						/>

						<TeamSection
							title="Executive Members"
							members={executiveMembers}
						/>
					</>
				)}
			</div>
		</div>
	)
}