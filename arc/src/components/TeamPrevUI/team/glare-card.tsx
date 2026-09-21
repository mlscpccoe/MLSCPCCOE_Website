import { useRef } from "react"

export const GlareCard = ({
	children,
	className,
	style,
}: {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}) => {
	const refElement = useRef<HTMLDivElement>(null)

	const updateRotation = (rotateX: number, rotateY: number) => {
		if (refElement.current) {
			refElement.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
		}
	}

	return (
		<div
			ref={refElement}
			className={`relative perspective-[800px] ${
				className || ""
			} hover:shadow-xl`}
			style={{
				...style,
				transformStyle: "preserve-3d",
				transition: "transform 0.2s ease-out",
			}}
			onPointerMove={(e) => {
				const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()

				const px = (e.clientX - rect.left) / rect.width
				const py = (e.clientY - rect.top) / rect.height

				const rotateY = (px - 0.5) * 30
				const rotateX = -(py - 0.5) * 30

				updateRotation(rotateX, rotateY)
			}}
			onPointerLeave={() => updateRotation(0, 0)}
		>
			{children}
		</div>
	)
}
