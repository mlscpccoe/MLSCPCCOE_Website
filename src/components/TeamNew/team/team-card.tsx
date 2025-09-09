import { motion } from "framer-motion"
import { cn } from "../../../../lib/utils"
import { FaGithub, FaLinkedin } from "react-icons/fa"

type TeamCardProps = {
	name: string
	role: string
	src: string
	github?: string
	linkedin?: string
	className?: string
	height?: number
	showDetails?: boolean
}

export function TeamCard({
	name,
	role,
	src,
	github,
	linkedin,
	className,
	height = 360,
	showDetails = false,
}: TeamCardProps) {
	return (
		<motion.div
			className={cn(
				"group relative w-full overflow-hidden rounded-2xl p-[1px]",
				"bg-gradient-to-br from-cyan-400/25 via-white/10 to-transparent",
				className
			)}
			style={{ height }}
			aria-live="polite"
			aria-expanded={showDetails}
			initial={{ rotateY: 90, opacity: 0 }}
			whileInView={{ rotateY: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<div className="relative h-full w-full rounded-2xl bg-black">
				<img
					src={src || "/placeholder.svg?height=360&width=320&query=portrait"}
					alt={`${name} – ${role}`}
					className="h-full w-full object-contain sm:object-cover transition duration-300 group-hover:scale-[1.02]"
					loading="lazy"
					crossOrigin="anonymous"
				/>

				<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

				<div className="absolute inset-x-0 bottom-0 z-10" id="less_data">
					<motion.div
						id="less_data"
						initial={{ opacity: 1, filter: "blur(0px)" }}
						animate={
							showDetails
								? { opacity: 0, filter: "blur(6px)" }
								: { opacity: 1, filter: "blur(0px)" }
						}
						transition={{ duration: 0.45, ease: "easeInOut" }}
					>
						<div className="px-4 pb-4 pt-3">
							<p className="text-white text-lg font-semibold leading-tight">
								{name}
							</p>
							<p className="text-zinc-300 text-sm">{role}</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, maxHeight: 0 }}
						animate={
							showDetails
								? { opacity: 1, maxHeight: 160 }
								: { opacity: 0, maxHeight: 0 }
						}
						transition={{ duration: 0.28, ease: "easeOut" }}
						className="px-4 pb-4 overflow-hidden"
						style={{ pointerEvents: showDetails ? "auto" : "none" }}
					>
						<div className="rounded-md bg-black/50 backdrop-blur-sm p-3 text-center">
							<p className="text-white text-sm font-medium">{name}</p>
							<p className="text-zinc-300 text-xs mt-1">{role}</p>
							<div className="flex justify-center gap-4 mt-3">
								{github && (
									<a
										href={github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-zinc-300 hover:text-white transition"
									>
										<FaGithub size={20} />
									</a>
								)}
								{linkedin && (
									<a
										href={linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="text-zinc-300 hover:text-white transition"
									>
										<FaLinkedin size={20} />
									</a>
								)}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	)
}
