import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useEffect, useMemo, useRef, useState } from "react"
import { TeamCard } from "./team-card"
import { GlareCard } from "./glare-card"

export type TeamItem = {
	id?: string | number
	name: string
	role: string
	src: string
	github?: string
	linkedin?: string
}

type VerticalRollProps = {
	items: TeamItem[]
	cardHeight?: number
	gap?: number
	direction?: "down" | "up"
	className?: string
}

export function VerticalRoll({
	items,
	cardHeight = 360,
	gap = 16,
	direction = "down",
	className,
}: VerticalRollProps) {
	const reduceMotion = useReducedMotion()
	const sectionRef = useRef<HTMLDivElement | null>(null)
	const viewportRef = useRef<HTMLDivElement | null>(null)
	const [hovered, setHovered] = useState<number | null>(null)
	const handleCardClick = (index: number) => {
		setHovered((prev) => (prev === index ? null : index))
	}

	const trackHeight = useMemo(
		() => items.length * cardHeight + Math.max(items.length - 1, 0) * gap,
		[items.length, cardHeight, gap]
	)

	const [viewportHeight, setViewportHeight] = useState<number>(720)

	useEffect(() => {
		const measure = () => {
			const h = viewportRef.current?.clientHeight || window.innerHeight || 720
			setViewportHeight(Math.min(h, 900))
		}
		measure()
		window.addEventListener("resize", measure)
		return () => window.removeEventListener("resize", measure)
	}, [])

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	})

	let yMotion
	let containerHeight

	if (direction === "down") {
		const travel = Math.max(trackHeight - viewportHeight, 0)
		yMotion = useTransform(scrollYProgress, [0, 1], [0, -travel])
		containerHeight = viewportHeight + travel
	} else {
		yMotion = useTransform(scrollYProgress, [0, 1], ["-8000px", "0px"])
		const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])
		containerHeight = trackHeight
	}

	return (
		<section
			ref={sectionRef}
			className={["relative", className || ""].join(" ")}
			style={{ height: containerHeight }}
			aria-label="Team members roll"
		>
			<div
				ref={viewportRef}
				className="sticky top-0 z-10 h-screen max-h-[900px] overflow-hidden"
			>
				<div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B0B0C] to-transparent" />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B0B0C] to-transparent" />

				<motion.div
					style={{ y: reduceMotion ? 0 : yMotion, perspective: 1000 }}
					className="relative mx-auto flex w-full max-w-sm flex-col"
				>
					{items.map((m, i) => {
						const isHovered = hovered === i
						return (
							<motion.div
								key={m.id ?? i}
								className="w-full"
								style={{
									marginBottom: i === items.length - 1 ? 0 : gap,
									zIndex: isHovered ? 40 : 10,
								}}
								onHoverStart={() => setHovered(i)}
								onHoverEnd={() => setHovered(null)}
								onClick={() => handleCardClick(i)}
								animate={
									isHovered
										? { scale: 1.03, y: -6 }
										: { scale: 1, y: 0 }
								}
								transition={{
									type: "spring",
									stiffness: 280,
									damping: 30,
								}}
							>
								<GlareCard style={{ height: cardHeight }}>
									<TeamCard
										name={m.name}
										role={m.role}
										src={m.src}
										github={m.github}
										linkedin={m.linkedin}
										height={cardHeight}
										showDetails={hovered === i}
									/>
								</GlareCard>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}
